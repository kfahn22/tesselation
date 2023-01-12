// Ported to P5.js from "RayMarching starting point" 
// by Martijn Steinrucken aka The Art of Code/BigWings - 2020
// The MIT License
// YouTube: youtube.com/TheArtOfCodeIsCool


//https://iquilezles.org/articles/distfunctions2d/

#ifdef GL_ES
precision mediump float;
#endif

// Pass in uniforms from the sketch.js file
uniform vec2 u_resolution; 
uniform float iTime;
uniform vec2 iMouse;
uniform float iFrame;
//uniform sampler2D tex0;

#define MAX_STEPS 100
#define MAX_DIST 100.
#define SURF_DIST .001

#define S smoothstep
#define T iTime
#define PURPLE vec3(83, 29,109) / 255.
#define RED vec3(191, 18, 97) / 255.
#define BLUE vec3(118, 212, 229) / 255.
#define PINK vec3(236,203,217) / 255.


// Function to take r,g,b values to range 0,1
// Remember to input a float!
vec3 rgb( float r, float g, float b) 
{
   return vec3(r/ 255.0, g / 255.0, b / 255.0);
}

float N21( vec2 p) {
    return fract( sin(p.x*100. + p.y*6574.)*5674. );
}


float SmoothNoise(vec2 uv) {
   // lv goes from 0,1 inside each grid
   // check out interpolation for dummies
    vec2 lv = fract(uv);
   
   //vec2 lv = smoothstep(0., 1., fract(uv*10.));  // create grid of boxes 
    vec2 id = floor(uv); // find id of each of the boxes
     lv = lv*lv*(3.-2.*lv); 
    
    // get noise values for each of the corners
    // Use mix function to join together
    float bl = N21(id);
    float br = N21(id+vec2(1,0));
    float b = mix (bl, br, lv.x);
    
    
    float tl = N21(id + vec2(0,1));
    float tr = N21(id+vec2(1,1));
    float t = mix (tl, tr, lv.x);
    
    return mix(b, t, lv.y);
}

float SmoothNoise2 (vec2 uv) {
   float c = SmoothNoise(uv*4.);
     // Layer(or octave) of noise
    // Double frequency of noise; half the amplitude
    c += SmoothNoise(uv*8.)*.5;
    c += SmoothNoise(uv*16.)*.25;
    c += SmoothNoise(uv*32.)*.125;
    c += SmoothNoise(uv*64.)*.0625;
    
    return c/ 2.;  // have to normalize or could go past 1
  
}
mat2 Rot(float a) {
    float s=sin(a), c=cos(a);
    return mat2(c, -s, s, c);
}

// Inigo quilez
float sdVesica(vec2 p, float r, float d)
{
    p = abs(p);
    float b = sqrt(r*r-d*d);
    return ((p.y-b)*d>p.x*b) ? length(p-vec2(0.0,b))
                             : length(p-vec2(-d,0.0))-r;
}

// Inigo Quilez
float sdEllipse( in vec2 p, in vec2 ab )
{
    p = abs(p); if( p.x > p.y ) {p=p.yx;ab=ab.yx;}
    float l = ab.y*ab.y - ab.x*ab.x;
    float m = ab.x*p.x/l;      float m2 = m*m; 
    float n = ab.y*p.y/l;      float n2 = n*n; 
    float c = (m2+n2-1.0)/3.0; float c3 = c*c*c;
    float q = c3 + m2*n2*2.0;
    float d = c3 + m2*n2;
    float g = m + m*n2;
    float co;
    if( d<0.0 )
    {
        float h = acos(q/c3)/3.0;
        float s = cos(h);
        float t = sin(h)*sqrt(3.0);
        float rx = sqrt( -c*(s + t + 2.0) + m2 );
        float ry = sqrt( -c*(s - t + 2.0) + m2 );
        co = (ry+sign(l)*rx+abs(g)/(rx*ry)- m)/2.0;
    }
    else
    {
        float h = 2.0*m*n*sqrt( d );
        float s = sign(q+h)*pow(abs(q+h), 1.0/3.0);
        float u = sign(q-h)*pow(abs(q-h), 1.0/3.0);
        float rx = -s - u - c*4.0 + 2.0*m2;
        float ry = (s - u)*sqrt(3.0);
        float rm = sqrt( rx*rx + ry*ry );
        co = (ry/sqrt(rm-rx)+2.0*g/rm-m)/2.0;
    }
    vec2 r = ab * vec2(co, sqrt(1.0-co*co));
    return length(r-p) * sign(p.y-r.y);
}

// Art of code
float smax(float a, float b, float k) {
    float h = clamp( (b-a) / k+0.5, 0.0 ,1.0 );
    return mix(a, b, h) + h* (1.0-h)*k * 0.5;
}

float sdBox(vec3 p, vec3 s) {
    p = abs(p)-s;
	return length(max(p, 0.))+min(max(p.x, max(p.y, p.z)), 0.);
}

float sdEllipsoid( vec3 p, vec3 r )
{
  float k0 = length(p/r);
  float k1 = length(p/(r*r));
  return k0*(k0-1.0)/k1;
}

float GetDist(vec3 p) {
    float d = sdBox(p, vec3(1));
    //float d = sdEllipsoid(p,  vec3(0.2));
    return d;
}

float RayMarch(vec3 ro, vec3 rd) {
	float dO=0.;
    
    for(int i=0; i<MAX_STEPS; i++) {
    	vec3 p = ro + rd*dO;
        float dS = GetDist(p);
        dO += dS;
        if(dO>MAX_DIST || abs(dS)<SURF_DIST) break;
    }
    
    return dO;
}

vec3 GetNormal(vec3 p) {
	float d = GetDist(p);
    vec2 e = vec2(.001, 0);
    
    vec3 n = d - vec3(
        GetDist(p-e.xyy),
        GetDist(p-e.yxy),
        GetDist(p-e.yyx));
    
    return normalize(n);
}

vec3 GetRayDir(vec2 uv, vec3 p, vec3 l, float z) {
    vec3 f = normalize(l-p),
        r = normalize(cross(vec3(0,1,0), f)),
        u = cross(f,r),
        c = f*z,
        i = c + uv.x*r + uv.y*u,
        d = normalize(i);
    return d;
}

// Art of code
float HexDist( vec2 p)
  {
   // take absolute value to get uvs in NE quadrant
   p = abs(p);
   float c = dot( p, normalize( vec2(1., 1.73) ) );
   c = max(c, p.x);
  
  return c;
}

vec2 Spherical( vec2 pos) 
{
   float r = sqrt(pos.x*pos.x + pos.y*pos.y);
   float theta = atan(pos.y, pos.x);
   vec2 w = vec2(r, theta);
   return w;
}

float Heart( vec2 uv) {
    vec2 q;
    //Take the absolute value to make it symmetrical
    uv.x = 1.1*abs(uv.x);
    
    float r = Spherical(uv).x;
    float theta = Spherical(uv).y;
  
    // Formula for Heart
    // q.x =  pow(r, 0.5)/1.5 * sin( theta * pow(r, 0.5) ) + pow(r, 0.5) /6.0 * sin (theta * pow(r, 0.5)) + pow(r, 0.5)/ 12.0  * sin( theta * pow(r, 0.5));
    // q.y = -pow(r, 2.5) * cos( theta * pow(r, 2.5) );// + r  * cos( theta * pow(r, 2.5));
    
   // Test
    q.x = pow(r, 0.5)/1.1 * sin( theta * pow( r, 0.5) ) *  cos ( theta * pow(r, 0.5) );//* log( abs(theta) * pow(r, 1.0));
    q.y = -pow(r, 3.5) * cos(  pow( theta * r, 2.5) );

    // Formula for Heart 2
    // q.x = pow(r, 0.5)/1.1 * sin( theta * pow(r, 0.5) ) *  cos (theta * pow(r, 0.5)) ;//* log( abs(theta) * pow(r, 1.0));
    // q.y = -pow(r, 3.5) * cos( theta * pow(r, 2.5) );
    
  
    float d = length(uv - q) ;
    return d;
}

float Heart3( vec2 uv) {
  vec2 q;
  //Take the absolute value to make it symmetrical
   uv.x = abs(0.3*uv.x);
  // Take the negative to flip it right side up
   uv.y = -1.2*uv.y;
   
  float th = Spherical(uv).y;
  th = clamp(th, -2., -1.);

  // Equation for Heart curve 1
  float r = 9.0 * pow(sin(th), 7.0) * pow(2.71828, 2.0 * th);
  q.x = r * cos(th);
  q.y = -r * sin(th);

  float d = length(uv - q) ;
  float s = S(0.3, 0.299, d);
  return s;
}

float HeartAC( vec2 uv) {
    //float r = 0.28;  
    float r = 0.25;  
    //blur *= r;
    float blur = 0.0;
    uv.x * 0.7;
    //Take the absolute value to make it symmetrical
    // Take square root to get nice curve
    // smax is eliminating hard edges
    uv.y -= smax(sqrt(abs(uv.x)) * 0.5, blur, 0.1);
    uv.y += 0.1 + blur * 0.5;
    
    float d = length(uv) ;
    float m = S(r+blur, r-blur-0.01, d);
    return m;
}

// float wing( vec2 p)
//   {
//    float r = Spherical(p).x
//    float theta = Spherical(uv).y;;
//    p *= 0.5;
//    // take absolute value to get uvs in NE quadrant
//    p = abs(p);
//    p.x * 0.3;
//    vec2 gv;
//    float b = pow(e, abs(p.x));
//     p.y -= smax(b, 0.0, 0.1);
//   // p.y -= smax(sqrt(abs(p.x)) * 0.5, 0.0, 0.1);
//    p.y -= smax(sqrt(abs(p.x)) , 0.0, 0.1);
//    // uv.y += 0.1 + blur * 0.5;
    
//     float d = length(p) ;
//    // float m = S(r+blur, r-blur-0.01, d);
//     //return m;
//    //float c = dot( p, normalize( vec2(1., 1.73) ) );
//    d = min(d, p.y);
  
//   return d;
// }

// float butterfly( vec2 p)
//   {
//   // p *= 0.5;
//    // take absolute value to get uvs in NE quadrant
//    p = abs(p);
//    p.x * 0.3;
//    vec2 gv;
//    float blur = 0.0;
//   // p.y -= smax(sqrt(abs(p.x)) * 0.5, 0.0, 0.1);
//    p.y -= smax(sqrt(abs(p.x)) , 0.0, 0.1);
//    // uv.y += 0.1 + blur * 0.5;
    
//     float d = length(p) ;
//    float m = S(r+blur, r-blur-0.01, d);
//     return m;
//    float c = dot( p, normalize( vec2(1., 1.73) ) );
//    c = min(d, p.y);
  
//   return c;
//   }

void main()
{
    vec2 uv = (gl_FragCoord.xy - .5*u_resolution.xy)/u_resolution.y;
	vec2 m = iMouse.xy/u_resolution.xy;
    
    vec3 col = vec3(0);
  
    
   
    
   // uv *= 10.;
    
    vec2 gv;
  
    // Make 2 square grids and then offset them so they fall on each others corners
    vec2 a = fract(uv) - .5;
    vec2 b = fract(uv - .5) - .5;
  // Visualize hexagon
    //col += step(HexDist(uv), 0.2); // .2
    // Visualize animated hexagonal pattern
    //col += sin( HexDist(uv)*10. + iTime );
    
    // Visualize diagonal grid
    // if ( length(a)<length(b) )
    //   gv = a;
    // else
    //   gv = b;
    float d3 = Heart3(vec2(uv.x, uv.y));
    float d1 = 1. - 2.75*Heart(uv);
    float m1 = S(0.28, 0.3, d1);
    float d4 = HeartAC(uv);
    float m4 = S(0.28, 0.3, d4);
    float d2 = Heart(vec2(uv.x, -uv.y));
    //float d = min(d1, d2);
    float d = mix(d1, d4, 0.95);
    float mm = S(0.28, 0.3, d);
    float mm2 = min(m1, m4);
    col += mm2;
    //col.rg = gv;
    //col = pow(col, vec3(.4545));	// gamma correction
    
    gl_FragColor = vec4(col,1.0);
}