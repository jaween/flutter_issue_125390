layout(location=0)out vec4 fragColor;

void main() {
  float alpha = 0.5;
  fragColor = vec4(254/255.0 * alpha, 253/255.0 * alpha, 252/255.0 * alpha, alpha);
}

// #version 460 core

// precision mediump float;

// #include <flutter/runtime_effect.glsl>

// layout(location=0)out vec4 fragColor;
// layout(location=1)uniform sampler2D image;
// layout(location=2)uniform sampler2D xorImage;
// layout(location=3)uniform sampler2D original;
// layout(location=4)uniform vec2 imageSize;
// layout(location=5)uniform vec2 xorSize;

// int xorInt(int a, int b) {
//   int result = 0;
//   for (int i = 0; i < 32; i++) {
//     bool aBit = mod(a, 2) == 1;
//     bool bBit = mod(b, 2) == 1;
//     bool xorBit = aBit ^^ bBit;
//     result += int((xorBit ? pow(2, i) : 0));
//     a /= 2;
//     b /= 2;
//   }
//   return result;
// }

// vec4 xor(vec4 a, vec4 b) {
//   return vec4(
//     xorInt(int(a.r * 255), int(b.r * 255))/255.0,
//     xorInt(int(a.g * 255), int(b.g * 255))/255.0,
//     xorInt(int(a.b * 255), int(b.b * 255))/255.0,
//     xorInt(int(a.a * 255), int(b.a * 255))/255.0
//   );
// }

// void main() {
//   vec2 coord = floor(FlutterFragCoord().xy);

//   // XOR of corresponding rgb values
//   vec2 imageUv = imageSize == vec2(1) ? vec2(0) : (coord / (imageSize - vec2(1)));
//   vec4 imageRgbaPre = texture(image, imageUv);
//   vec4 imageRgba = imageRgbaPre.a == 0 ? vec4(0) : vec4(imageRgbaPre.rgb/imageRgbaPre.a, imageRgbaPre.a);

//   // Reconstruct XOR pixel
//   vec2 xorRgbUv = xorSize.y == 1 ? vec2(coord.x/(xorSize.x-1), 0) : (coord / (xorSize - vec2(1)));
//   vec3 xorRgb = texture(xorImage, xorRgbUv).rgb;
//   vec2 xorAlphaCoord = vec2(imageSize.x + floor(coord.x / 3), coord.y);
//   vec2 xorAlphaUv = xorSize.y == 1
//       ? (vec2(xorAlphaCoord.x / (xorSize.x - 1), 0))
//       : (xorAlphaCoord / (xorSize - vec2(1)));
//   vec3 xorAlphaPacked = texture(xorImage, xorAlphaUv).rgb;
//   float xorAlpha = 0;
//   float remainder = floor(mod(coord.x, 3));
//   if (remainder == 0) {
//     xorAlpha = xorAlphaPacked.r;
//   } else if (remainder == 1) {
//     xorAlpha = xorAlphaPacked.g;
//   } else if (remainder == 2) {
//     xorAlpha = xorAlphaPacked.b;
//   }
//   vec4 xorRgba = vec4(xorRgb, xorAlpha);

//   vec4 originalPixel = texture(original, imageUv);
  
//   vec4 result = xor(xorRgba, imageRgba);
//   vec4 premul = vec4(result.rgb * result.a, result.a);
//   fragColor = premul;//originalPixel;//originalPixel.b == result.b ? vec4(1, 0, 1, 1) : vec4(1);
//   // fragColor = vec4(xorRgba.rgb , xorRgba.a);

// // layout(location=0)out vec4 fragColor;

// // void main() {
//   float alpha = 0.5;
//   fragColor = vec4(alpha, 0xFE / 255.0 * alpha, alpha, alpha);
// }
