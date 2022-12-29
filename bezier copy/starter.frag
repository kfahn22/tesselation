// Ported to P5.js from "RayMarching starting point" 
// "Coding a Bezier Curve from Scratch
// by Martijn Steinrucken aka The Art of Code/BigWings - 2020
// The MIT License
// YouTube: youtube.com/TheArtOfCodeIsCool

#ifdef GL_ES
precision mediump float;
#endif

// Pass in uniforms from the sketch.js file
uniform vec2 u_resolution; 
uniform float iTime;
uniform vec2 iMouse;
uniform float iFrame;

#define S smoothstep

float N21( vec2 p) {
    return fract( sin(p.x*100. + p.y*6574.)*5674. );
}


float remap01(float a, float b, float t)
{
 return (t-a) / (b-a);
}

float remap(float a, float b, float c, float d, float  t)
{

  return remap01(a,b,t) * (d-c) + c;
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

// float bezierCurve( vec2 uv, vec2 a) {
//   vec2
//   A = vec2(-0.5, -0.5),
//   ab = vec2(0.0, -0.5),
//   B = vec2(0.5, -0.5),
//   bc = vec2(0.5, 0.0),
//   C = vec2(0.5, 0.5),
//   cd = vec2(0.0, 0.5),
//   D = vec2(-0.5, 0.5)
//   ad = vec2(-0.5, 0.0),
//   C = vec2(iMouse.xy - u_resolution.xy*0.5)/u_resolution.x,
//   AB = mix(A, B, t),
//   BC = mix(B, C, t),
//   CD = mix(C, D, t),
//   DA = mix(D, A, t),
  
//   ACB = mix(AC, CB, t);
// }

vec3 bezierCurve( vec2 uv) {
  float t = sin(iTime)*0.5+0.5;
 // uv.x = abs(uv.x);
  vec3 col = vec3(0);
  vec2
    A = vec2(-0.25, -0.25),
    B = vec2(0.25, 0.25),
    C = vec2(iMouse.xy - u_resolution.xy*0.5)/u_resolution.x,
    AC = mix(A, C, t),
    CB = mix(C, B, t),
    ACB = mix(AC, CB, t);

   col += vec3(1,0,0)*Circle(uv, A);
   col += vec3(0,0,1)*Circle(uv, B);
   col += vec3(0,1,0)*Circle(uv, C);

   col += vec3(1,1,0)*Circle(uv, AC);
   col += vec3(0,1,1)*Circle(uv, CB);
   col += vec3(01,1,1)*Circle(uv, ACB);
   col += Line(uv, A, C) + Line(uv, C, B);
   col += Line(uv, AC, CB);

    int NUM_SEGS = 25;
   vec2 P, PP=A;

   //approximate curve by a number of line segments
   for (int i = 1; i <= 25; i++) {
     // t goes from approx 0 to 1
    // t = float(i)/float(NUM_SEGS);
     t = float(i)/25.;
     P = Bezier(A, B, C, t);
     col += max(col, Line(uv, P, PP));
     PP = P;
    }
    return col;
}  
// float bezierCurve( vec2 uv, vec2 a) {
//   vec2 uv = abs(uv);
//   vec2
  // A = vec2(-0.5, -0.5),
  // B = vec2(0.5, -0.5),
  // C = vec2(0.5, 0.5),
  // D = vec2(-0.5, 0.5)
  // //H = vec2(iMouse.xy - u_resolution.xy*0.5)/u_resolution.x,
  // AB = mix(A, B, t),
  // BC = mix(B, C, t),
  // CD = mix(C, D, t),
  // DA = mix(D, A, t),
  
  // AAB = mix(A, AB, t);
  // ABB = mix(AB, A, t);
  // BBC = mix(B, BC, t);
  // BCC = mix(BC, C, t);
  // CCD = mix(C, CD, t);
  // CDD = mix(CD, D, t);
  // DDA = mix(D, DA, t);
  // DAA = mix(DA, A, t);

  // int NUM_SEGS = 8;
  //  vec2 P, PP=A;

  //  //approximate curve by a number of line segments
  //  for (int i = 1; i<= 8; i++) {
  //    // t goes from approx 0 to 1
  //   // t = float(i)/float(NUM_SEGS);
  //    t = float(i)/8.;
  //    P = Bezier(A, B, C, t);
  //    col += max(col, Line(uv, P, PP));
  //    PP = P;
//}


void main( )
{
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = (gl_FragCoord.xy-0.5*u_resolution.xy)/u_resolution.y;
   // float t =  iTime;
  
    vec3 col = vec3(0.0);
    //float t;
    float t = sin(iTime)*0.5+0.5;
  
    col += bezierCurve(uv);

    gl_FragColor = vec4(col, 1.0);
}
