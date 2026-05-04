import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:provider/provider.dart';

import 'package:llm_auditing_roi_tool/main.dart';
import 'package:llm_auditing_roi_tool/state/roi_state.dart';

void main() {
  testWidgets('App launches and shows input screen', (WidgetTester tester) async {
    // Build our app and trigger a frame.
    await tester.pumpWidget(
      MultiProvider(
        providers: [
          ChangeNotifierProvider(create: (_) => RoiState()),
        ],
        child: const VanguardApp(),
      ),
    );

    // Verify that the title is present
    expect(find.text('Current Freight Operations'), findsOneWidget);
    expect(find.text('Calculate ROI'), findsOneWidget);
  });
}
