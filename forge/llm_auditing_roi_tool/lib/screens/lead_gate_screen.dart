import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../state/roi_state.dart';
import 'result_screen.dart';

class LeadGateScreen extends StatefulWidget {
  const LeadGateScreen({Key? key}) : super(key: key);

  @override
  State<LeadGateScreen> createState() => _LeadGateScreenState();
}

class _LeadGateScreenState extends State<LeadGateScreen> {
  final _formKey = GlobalKey<FormState>();

  final _nameController = TextEditingController();
  final _emailController = TextEditingController();
  final _companyController = TextEditingController();

  @override
  void dispose() {
    _nameController.dispose();
    _emailController.dispose();
    _companyController.dispose();
    super.dispose();
  }

  void _submitLead() {
    if (_formKey.currentState!.validate()) {
      final state = Provider.of<RoiState>(context, listen: false);
      state.setLeadData(
        name: _nameController.text,
        email: _emailController.text,
        company: _companyController.text,
      );

      // Navigate to results
      Navigator.pushReplacement(
        context,
        MaterialPageRoute(builder: (context) => const ResultScreen()),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('View Your ROI'),
        centerTitle: true,
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(24.0),
        child: Form(
          key: _formKey,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              const Icon(
                Icons.analytics,
                size: 64,
                color: Colors.brown, // Placeholder color, themed later
              ),
              const SizedBox(height: 16),
              const Text(
                'Your Report is Ready',
                style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
                textAlign: TextAlign.center,
              ),
              const SizedBox(height: 8),
              const Text(
                'Tell us where to send your customized Vanguard ROI forecast.',
                textAlign: TextAlign.center,
                style: TextStyle(color: Colors.grey),
              ),
              const SizedBox(height: 32),
              TextFormField(
                controller: _nameController,
                decoration: const InputDecoration(
                  labelText: 'Full Name',
                  prefixIcon: Icon(Icons.person),
                  border: OutlineInputBorder(),
                ),
                validator: (value) =>
                    value == null || value.isEmpty ? 'Please enter your name' : null,
              ),
              const SizedBox(height: 16),
              TextFormField(
                controller: _emailController,
                keyboardType: TextInputType.emailAddress,
                decoration: const InputDecoration(
                  labelText: 'Work Email',
                  prefixIcon: Icon(Icons.email),
                  border: OutlineInputBorder(),
                ),
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Please enter your email';
                  }
                  if (!value.contains('@')) {
                    return 'Please enter a valid email address';
                  }
                  return null;
                },
              ),
              const SizedBox(height: 16),
              TextFormField(
                controller: _companyController,
                decoration: const InputDecoration(
                  labelText: 'Company Name',
                  prefixIcon: Icon(Icons.business),
                  border: OutlineInputBorder(),
                ),
                validator: (value) =>
                    value == null || value.isEmpty ? 'Please enter your company' : null,
              ),
              const SizedBox(height: 48),
              ElevatedButton(
                onPressed: _submitLead,
                style: ElevatedButton.styleFrom(
                  padding: const EdgeInsets.symmetric(vertical: 16),
                  textStyle: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
                ),
                child: const Text('Unlock My Results'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
