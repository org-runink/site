import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../state/roi_state.dart';
import 'lead_gate_screen.dart';

class InputScreen extends StatefulWidget {
  const InputScreen({Key? key}) : super(key: key);

  @override
  State<InputScreen> createState() => _InputScreenState();
}

class _InputScreenState extends State<InputScreen> {
  final _formKey = GlobalKey<FormState>();

  late TextEditingController _volumeController;
  late TextEditingController _timeController;
  late TextEditingController _rateController;
  late TextEditingController _spendController;

  @override
  void initState() {
    super.initState();
    final state = Provider.of<RoiState>(context, listen: false);
    _volumeController = TextEditingController(text: state.annualInvoiceVolume.toStringAsFixed(0));
    _timeController = TextEditingController(text: state.avgTimePerInvoiceMins.toStringAsFixed(0));
    _rateController = TextEditingController(text: state.blendedHourlyRate.toStringAsFixed(0));
    _spendController = TextEditingController(text: state.annualSpend.toStringAsFixed(0));
  }

  @override
  void dispose() {
    _volumeController.dispose();
    _timeController.dispose();
    _rateController.dispose();
    _spendController.dispose();
    super.dispose();
  }

  void _submitForm() {
    if (_formKey.currentState!.validate()) {
      final state = Provider.of<RoiState>(context, listen: false);
      state.setMetrics(
        volume: double.tryParse(_volumeController.text) ?? 0,
        time: double.tryParse(_timeController.text) ?? 0,
        rate: double.tryParse(_rateController.text) ?? 0,
        spend: double.tryParse(_spendController.text) ?? 0,
      );
      Navigator.push(
        context,
        MaterialPageRoute(builder: (context) => const LeadGateScreen()),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('ROI Calculator'),
        centerTitle: true,
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(24.0),
        child: Form(
          key: _formKey,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              const Text(
                'Current Freight Operations',
                style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
                textAlign: TextAlign.center,
              ),
              const SizedBox(height: 8),
              const Text(
                'Enter your logistics metrics to forecast the ROI of LLM-based document auditing.',
                textAlign: TextAlign.center,
                style: TextStyle(color: Colors.grey),
              ),
              const SizedBox(height: 32),
              _buildNumberField(
                controller: _volumeController,
                label: 'Annual Invoice Volume',
                icon: Icons.receipt_long,
              ),
              const SizedBox(height: 16),
              _buildNumberField(
                controller: _timeController,
                label: 'Avg Time per Invoice (mins)',
                icon: Icons.timer,
              ),
              const SizedBox(height: 16),
              _buildNumberField(
                controller: _rateController,
                label: 'Blended Hourly Rate (\$)',
                icon: Icons.attach_money,
              ),
              const SizedBox(height: 16),
              _buildNumberField(
                controller: _spendController,
                label: 'Annual Spend (\$)',
                icon: Icons.account_balance_wallet,
              ),
              const SizedBox(height: 48),
              ElevatedButton(
                onPressed: _submitForm,
                style: ElevatedButton.styleFrom(
                  padding: const EdgeInsets.symmetric(vertical: 16),
                  textStyle: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
                ),
                child: const Text('Calculate ROI'),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildNumberField({
    required TextEditingController controller,
    required String label,
    required IconData icon,
  }) {
    return TextFormField(
      controller: controller,
      keyboardType: TextInputType.number,
      decoration: InputDecoration(
        labelText: label,
        prefixIcon: Icon(icon),
        border: const OutlineInputBorder(),
      ),
      validator: (value) {
        if (value == null || value.isEmpty) {
          return 'Please enter a value';
        }
        if (double.tryParse(value) == null) {
          return 'Please enter a valid number';
        }
        return null;
      },
    );
  }
}
