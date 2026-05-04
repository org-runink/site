import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'screens/input_screen.dart';
import 'state/roi_state.dart';

void main() {
  runApp(
    MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (_) => RoiState()),
      ],
      child: const VanguardApp(),
    ),
  );
}

class VanguardApp extends StatelessWidget {
  const VanguardApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Vanguard ROI Tool',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        useMaterial3: true,
        // Brand palette: wine, red amber, dark olive
        colorScheme: ColorScheme.fromSeed(
          seedColor: const Color(0xFF722F37), // Wine base
          primary: const Color(0xFF722F37),
          secondary: const Color(0xFFD65A31), // Red amber
          tertiary: const Color(0xFF556B2F), // Dark olive
          surface: Colors.white,
          background: const Color(0xFFF9F9F9),
        ),
        appBarTheme: const AppBarTheme(
          backgroundColor: Color(0xFF722F37),
          foregroundColor: Colors.white,
        ),
        elevatedButtonTheme: ElevatedButtonThemeData(
          style: ElevatedButton.styleFrom(
            backgroundColor: const Color(0xFFD65A31),
            foregroundColor: Colors.white,
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(8),
            ),
          ),
        ),
        inputDecorationTheme: InputDecorationTheme(
          filled: true,
          fillColor: Colors.white,
          border: OutlineInputBorder(
            borderRadius: BorderRadius.circular(8),
            borderSide: BorderSide(color: Colors.grey.shade300),
          ),
          focusedBorder: OutlineInputBorder(
            borderRadius: BorderRadius.circular(8),
            borderSide: const BorderSide(color: Color(0xFF722F37), width: 2),
          ),
        ),
      ),
      home: const InputScreen(),
    );
  }
}
