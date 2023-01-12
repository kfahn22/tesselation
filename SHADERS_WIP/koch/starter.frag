/*   Angle based on position of mouse
    Multiply by pi so that you can rotate 360
    float angle = mouse.x*3.1415;
    
    Create a line that rotates around origin
    for mouse.x = 0 => 0, 1
    vec2 n = vec2(sin(angle), cos(angle)); 
    
    Create distance to arbitrarily rotated line
    float d = dot(uv, n);  // uv.x * 0 + uv.y * 1 = uv.y
    col += smoothstep(.01, .0, abs(d));  // create line
    
    Reflect points across line
    d is distance to line, n is direction, n*d -> walk to line
    n*d*2 -> go 1 step past line   
     
    uv -= n * min(0., d) * 2.;
    col.rg += sin(uv*10.);
*/

#ifdef GL_ES
precision mediump float;
#endif

// Pass in uniforms from the sketch.js file
uniform vec2 u_resolution; 
uniform float iTime;
uniform vec2 iMouse;
uniform float iFrame;
uniform sampler2D tex0;

#define T iTime
#define S smoothstep

// Function to take r,g,b values to range 0,1
// Remember to input a float!
vec3 rgb( float r, float g, float b) 
{
   return vec3(r/ 255.0, g / 255.0, b / 255.0);
}

 // Create a normal line that rotates around origin
vec2 N(float angle)
  {
  return vec2( sin(angle), cos(angle) );
}

float Circle(vec2 p, vec2 c) {
  float d = length(p-c);
  return S(0.008, 0.0, d-.01);
}

float Line(vec2 p, vec2 a, vec2 b) {
  vec2 pa = p-a, ba = b-a;
  float t = clamp(dot(pa,ba)/dot(ba,ba), 0., 1.);
  vec2 c = a + ba*t;
  float d = length(c-p);
  return S(0.0025, 0.0, d - 0.0001);
}


 vec2 Bezier(vec2 a, vec2 b, vec2 c, float t) {
  return mix(mix(a, c, t), mix(c, b, t), t);
}


float bezierCurve( vec2 uv) {
  float t = sin(iTime)*0.5+0.5;
 // uv.x = abs(uv.x);
  float d;
  vec2
    A = vec2(-0.25, -0.25),
    B = vec2(0.25, 0.25),
    C = vec2(0., 0.),
    // A = vec2(max(uv.x, -1.), 0.),
    // B = vec2(max(uv.x,  1.), 0.),
   // C = vec2(min(uv.x,  0.), 0.),
    //C = vec2(iMouse.xy - u_resolution.xy*0.5)/u_resolution.x,
    AC = mix(A, C, t),
    CB = mix(C, B, t),
    ACB = mix(AC, CB, t);

  //  col += vec3(1,0,0)*Circle(uv, A);
  //  col += vec3(0,0,1)*Circle(uv, B);
  //  col += vec3(0,1,0)*Circle(uv, C);

  //  col += vec3(1,1,0)*Circle(uv, AC);
  //  col += vec3(0,1,1)*Circle(uv, CB);
  //  col += vec3(01,1,1)*Circle(uv, ACB);
   d += Line(uv, A, C) + Line(uv, C, B);
   d += Line(uv, AC, CB);

    int NUM_SEGS = 25;
   vec2 P, PP=A;

   //approximate curve by a number of line segments
   for (int i = 1; i <= 25; i++) {
     // t goes from approx 0 to 1
    // t = float(i)/float(NUM_SEGS);
     t = float(i)/25.;
     P = Bezier(A, B, C, t);
     d += max(d, Line(uv, P, PP));
     PP = P;
    }
    return d;
}  

float sdHexagram(vec2 p, float r )
{
    const vec4 k = vec4(-0.5,0.8660254038,0.5773502692,1.7320508076);
    p = abs(p);
    p -= 2.0*min(dot(k.xy,p),0.0)*k.xy;
    p -= 2.0*min(dot(k.yx,p),0.0)*k.yx;
    p -= vec2(clamp(p.x,r*k.z,r*k.w),r);
    return length(p)*sign(p.y);
}

float sdEquilateralTriangle( in vec2 p )
{
    const float k = sqrt(3.0);
    p.x = abs(p.x) - 1.0;
    p.y = p.y + 1.0/k;
    if( p.x+k*p.y>0.0 ) p = vec2(p.x-k*p.y,-k*p.x-p.y)/2.0;
    p.x -= clamp( p.x, -2.0, 0.0 );
    return -length(p)*sign(p.y);
}
float sdCircle( vec2 p, float r )
{
    return length(p) - r;
}
void main()
{
    // Normalized pixel coordinates (from 0 to 1)
    // Remapped so that (0,0) is in center
    vec2 uv = (gl_FragCoord.xy -.5* u_resolution.xy)/u_resolution.y;
    vec2 mouse = iMouse.xy/u_resolution.xy;
  
    vec3 col1 = rgb(242.,43.,41.);
  
    uv *= 6.;  // Can adjust size of Koch curve here
    
    // Time varying pixel color
    vec3 col =vec3(0);

    // To visualize initially base angle on position of mouse
    // Hat segments line up when mouse.x ~ 2/3
    // Multiply by pi so that you can rotate 360
    //float angle = mouse.x*3.1415;
    
    // Shift up use tan(a) = y / 0.5 
    uv.x = abs(uv.x);  // Reflect around y axis
    uv.y += tan((5./6.)*3.1415)*.5;
    vec2 n = N((5./6.)*3.1415);
    float d = dot(uv- vec2(.5,0), n);  //remap to right-most side of Koch curve
    uv -= n * max(0., d) * 2.; // Code for a reflection about a line
    
    //col += smoothstep(.01, .0, abs(d));  / used to visualize the reflection lines
  
    n = N((2./3.)*3.1415);
    float scale = 1.;  // keeps track of how mnay times we compress the uvs
    uv.x += .5; // adjustment to reorient Koch curve
   
    for (int i = 0; i < 3; i++) {
    
        // Remap uv so that one line segment [-.5,.5]
        uv *= 3.;
        scale *= 3.;
        // put (0,0) in middle of line segment
        uv.x -= 1.5; 

        // Fold x coordinates in half by taking absolute value 
        uv.x = abs(uv.x);

        // Substract 0.5 on either side to increase the length of line to 3 units
        uv.x -= .5;
        uv -= n * min(0., dot(uv, n)) * 2.;


     }
    /* Add line segment by drawing the difference of the position of a 
    pixel and a position on the line segment.  Lying on x-axis.  */
   

  //  vec2 A = vec2(max(uv.x, -1.), 0.);
  //  vec2 B = vec2(max(uv.x,  1.), 0.);
  //  vec2 C = vec2(0.4, 0.);

   
    d = sdEquilateralTriangle(uv- vec2(0.2, 0.2)) ;
    //float d2 = sdEquilateralTriangle(uv-vec2(0.5, 0.25));
    // d = length(uv - vec2(clamp(uv.x, -1., 1.), 0));
    //d= mix(d, d2, 0.5);
    // Use smoothstep to cut out actual line
    // Divide by 9 to compensate for 
    col += smoothstep(2./u_resolution.y, .0, d/scale); // draws Koch curvle
    
    col *= col1;  // add color to Koch curve
    uv /= scale;
   // col += texture2D(tex0, uv*2.).rgb;
    
   
    // col += texture2D(tex0, uv*2. + iTime*0.003).rgb;
    //col.rg += uv;
     
    // Output to screen
    gl_FragColor = vec4(col,1.0);
}