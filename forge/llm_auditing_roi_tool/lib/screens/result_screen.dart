import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:intl/intl.dart';
import '../state/roi_state.dart';

class ResultScreen extends StatelessWidget {
  const ResultScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final state = Provider.of<RoiState>(context);
    final currencyFormatter = NumberFormat.currency(symbol: '\$', decimalDigits: 0);
    final percentFormatter = NumberFormat.percentPattern();

    return Scaffold(
      appBar: AppBar(
        title: const Text('Vanguard Forecast'),
        centerTitle: true,
        automaticallyImplyLeading: false, // Prevent going back to gate
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(24.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Text(
              'Hello ${state.leadName},',
              style: const TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 8),
            Text(
              'Based on your inputs for ${state.leadCompany}, here is the projected impact of implementing LLM-based Freight Document Auditing:',
              style: const TextStyle(fontSize: 16, color: Colors.black87),
            ),
            const SizedBox(height: 32),

            // Hero Metric: ROI
            Card(
              elevation: 4,
              color: Theme.of(context).colorScheme.primaryContainer,
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
              child: Padding(
                padding: const EdgeInsets.all(24.0),
                child: Column(
                  children: [
                    const Text(
                      'Projected Year 1 ROI',
                      style: TextStyle(fontSize: 18, fontWeight: FontWeight.w600),
                    ),
                    const SizedBox(height: 8),
                    Text(
                      percentFormatter.format(state.year1ROI / 100), // intl expects 0.0 - 1.0
                      style: TextStyle(
                        fontSize: 48,
                        fontWeight: FontWeight.bold,
                        color: Theme.of(context).colorScheme.onPrimaryContainer,
                      ),
                    ),
                  ],
                ),
              ),
            ),
            const SizedBox(height: 24),

            // Secondary Metrics
            Row(
              children: [
                Expanded(
                  child: _buildMetricCard(
                    context,
                    title: 'Annual Labor Savings',
                    value: currencyFormatter.format(state.annualLaborSavings),
                    icon: Icons.savings,
                  ),
                ),
                const SizedBox(width: 16),
                Expanded(
                  child: _buildMetricCard(
                    context,
                    title: 'Additional Claim Recovery',
                    value: currencyFormatter.format(state.additionalClaimRecovery),
                    icon: Icons.find_in_page,
                  ),
                ),
              ],
            ),
            const SizedBox(height: 24),

            // Summary Breakdown
            const Text(
              'Financial Breakdown',
              style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 16),
            _buildSummaryRow('Current Annual Cost (Manual):', currencyFormatter.format(state.currentAnnualLaborCost)),
            const Divider(),
            _buildSummaryRow('Projected Cost (Automated):', currencyFormatter.format(state.futureAnnualLaborCost)),
            const Divider(),
            _buildSummaryRow('Estimated Year 1 Investment:', currencyFormatter.format(state.year1Investment)),
            const Divider(),
            _buildSummaryRow('Net First-Year Benefit:', currencyFormatter.format(state.netBenefit), isHighlight: true),

            const SizedBox(height: 48),
            ElevatedButton.icon(
              onPressed: () {
                // Future: Send email, export PDF, etc.
                ScaffoldMessenger.of(context).showSnackBar(
                  const SnackBar(content: Text('A detailed technical brief has been sent to your email.')),
                );
              },
              icon: const Icon(Icons.download),
              label: const Text('Download Full Technical Brief'),
              style: ElevatedButton.styleFrom(
                padding: const EdgeInsets.symmetric(vertical: 16),
              ),
            ),
            const SizedBox(height: 16),
            TextButton(
              onPressed: () {
                Navigator.of(context).popUntil((route) => route.isFirst);
              },
              child: const Text('Recalculate'),
            )
          ],
        ),
      ),
    );
  }

  Widget _buildMetricCard(BuildContext context, {required String title, required String value, required IconData icon}) {
    return Card(
      elevation: 2,
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
      child: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            Icon(icon, size: 32, color: Theme.of(context).colorScheme.primary),
            const SizedBox(height: 12),
            Text(
              value,
              style: const TextStyle(fontSize: 22, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 4),
            Text(
              title,
              textAlign: TextAlign.center,
              style: const TextStyle(fontSize: 14, color: Colors.grey),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildSummaryRow(String label, String value, {bool isHighlight = false}) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 8.0),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Text(
            label,
            style: TextStyle(
              fontSize: 16,
              fontWeight: isHighlight ? FontWeight.bold : FontWeight.normal,
            ),
          ),
          Text(
            value,
            style: TextStyle(
              fontSize: 16,
              fontWeight: isHighlight ? FontWeight.bold : FontWeight.w600,
              color: isHighlight ? Colors.green[700] : null,
            ),
          ),
        ],
      ),
    );
  }
}
