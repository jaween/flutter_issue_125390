import 'dart:ui';

import 'package:flutter/widgets.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  @override
  void initState() {
    super.initState();
    _execute();
  }

  void _execute() async {
    final program = await FragmentProgram.fromAsset('assets/shader.frag');
    final pictureRecorder = PictureRecorder();
    final canvas = Canvas(pictureRecorder);
    canvas.drawRect(
      Offset.zero & const Size(1, 1),
      Paint()..shader = program.fragmentShader(),
    );
    final picture = pictureRecorder.endRecording();
    final image = await picture.toImage(1, 1);
    final bytesStraight =
        await image.toByteData(format: ImageByteFormat.rawStraightRgba);
    print(bytesStraight!.buffer.asUint8List());
  }

  @override
  Widget build(BuildContext context) {
    return const SizedBox.shrink();
  }
}
