# Configuration Parameters

- **temporalResolve**: Enables temporal resolution, improving the quality of reflections by accumulating data over multiple frames.
- **STRETCH_MISSED_RAYS**: Stretches rays that miss geometry, helping to fill in gaps in reflections.
- **USE_MRT**: Uses multiple render targets, which can improve the accuracy and performance of the SSR effect.
- **USE_NORMALMAP**: Utilizes the normal map of the surfaces to improve reflection accuracy.
- **USE_ROUGHNESSMAP**: Utilizes the roughness map to adjust the reflection based on surface roughness.
- **ENABLE_JITTERING**: Adds jittering to the rays to reduce artifacts and noise.
- **ENABLE_BLUR**: Enables blurring of the reflections to smooth out artifacts.

## Fine-Tuning Parameters

- **temporalResolveMix**: Controls the mix ratio for temporal resolution. Higher values favor new frame data more.
- **temporalResolveCorrectionMix**: Adjusts the correction mix for temporal resolution to balance between current and previous frames.
- **maxSamples**: Limits the number of samples per pixel for reflections. Setting to 0 allows maximum possible samples.
- **resolutionScale**: Adjusts the resolution scale of the reflections. Lower values reduce the resolution, improving performance but reducing quality.
- **blurMix**: Determines the mix level for blurring. Higher values increase the blur effect.
- **blurKernelSize**: Sets the size of the kernel used for blurring. Larger sizes result in more blur.
- **blurSharpness**: Controls the sharpness of the blur. Higher values make the blur less smooth.
- **rayStep**: Sets the step size for the rays. Smaller values increase precision but may impact performance.
- **intensity**: Adjusts the intensity of the reflections. Higher values make reflections more prominent.
- **maxRoughness**: Limits reflections based on surface roughness. Lower values mean only smoother surfaces will reflect.
- **jitter**: Amount of jitter applied to rays to reduce noise.
- **jitterSpread**: Determines how far the jitter is spread. Higher values spread the jitter more widely.
- **jitterRough**: Adjusts jitter specifically for rough surfaces.
- **roughnessFadeOut**: Controls the fade-out effect of reflections on rough surfaces.
- **rayFadeOut**: Adjusts the fade-out effect for rays over distance.
- **MAX_STEPS**: Maximum number of steps taken by rays when calculating reflections. More steps increase quality but reduce performance.
- **NUM_BINARY_SEARCH_STEPS**: Number of binary search steps for refining hit points on surfaces.
- **maxDepthDifference**: Maximum allowed depth difference for rays to consider a hit valid.
- **maxDepth**: Sets the maximum depth for the rays.
- **thickness**: Adjusts the thickness of the rays, which affects how they interact with geometry.
- **ior**: Index of refraction for the material, affecting how light bends when entering a different medium.
