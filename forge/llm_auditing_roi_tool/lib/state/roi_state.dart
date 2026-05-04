import 'package:flutter/foundation.dart';

class RoiState extends ChangeNotifier {
  // Input Metrics
  double _annualInvoiceVolume = 50000;
  double _avgTimePerInvoiceMins = 15;
  double _blendedHourlyRate = 45;
  double _annualSpend = 50000000;

  // Lead Data
  String _leadName = '';
  String _leadEmail = '';
  String _leadCompany = '';

  // Getters for inputs
  double get annualInvoiceVolume => _annualInvoiceVolume;
  double get avgTimePerInvoiceMins => _avgTimePerInvoiceMins;
  double get blendedHourlyRate => _blendedHourlyRate;
  double get annualSpend => _annualSpend;

  // Getters for leads
  String get leadName => _leadName;
  String get leadEmail => _leadEmail;
  String get leadCompany => _leadCompany;

  // Setters for inputs
  void setMetrics({
    required double volume,
    required double time,
    required double rate,
    required double spend,
  }) {
    _annualInvoiceVolume = volume;
    _avgTimePerInvoiceMins = time;
    _blendedHourlyRate = rate;
    _annualSpend = spend;
    notifyListeners();
  }

  // Setters for leads
  void setLeadData({
    required String name,
    required String email,
    required String company,
  }) {
    _leadName = name;
    _leadEmail = email;
    _leadCompany = company;
    notifyListeners();
  }

  // Calculation Logic (from Whitepaper)

  double get currentAnnualLaborCost {
    double totalHours = _annualInvoiceVolume * (_avgTimePerInvoiceMins / 60.0);
    return totalHours * _blendedHourlyRate;
  }

  double get futureAnnualLaborCost {
    // 80% automation rate means 20% remains manual
    double remainingVolume = _annualInvoiceVolume * 0.20;
    double totalHours = remainingVolume * (_avgTimePerInvoiceMins / 60.0);
    return totalHours * _blendedHourlyRate;
  }

  double get annualLaborSavings {
    return currentAnnualLaborCost - futureAnnualLaborCost;
  }

  double get additionalClaimRecovery {
    // 0.5% of spend
    return _annualSpend * 0.005;
  }

  double get totalFirstYearBenefit {
    return annualLaborSavings + additionalClaimRecovery;
  }

  double get year1Investment {
    return 180000.0; // Fixed per whitepaper
  }

  double get netBenefit {
    return totalFirstYearBenefit - year1Investment;
  }

  double get year1ROI {
    if (year1Investment == 0) return 0;
    return (netBenefit / year1Investment) * 100.0;
  }
}
