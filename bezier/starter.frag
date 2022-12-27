// Ported to P5.js from "RayMarching starting point" 
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
  return S(0.008, 0.0, d - 0.0001);
}

void main( )
{
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = (gl_FragCoord.xy-0.5*u_resolution.xy)/u_resolution.y;
    float t =  iTime;
  
    vec3 col = vec3(0.0);
     col += Circle(uv, vec2(0));
     col += Line(uv, vec2(-0.2), vec2(0.2));
    gl_FragColor = vec4(col, 1.0);
}
