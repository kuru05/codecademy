#include <iostream>

int main() {
  double pesos;
  double reais;
  double soles;
  double dollars;

  std::cout << " Enter number of Colombian Pesos: \n";
  std::cin >> pesos;
  std::cout << " Enter number of Reais: \n";
  std::cin >> reais;
  std::cout << " Enter number of Soles: \n";
  std::cin >> soles;
//1 Peso equals 0.059 United States Dollar
//1  Real equals 0.20 United States Dollar
// 1 Sol equals 0.26 United States Dollar
  double conversion_peso = 0.059;
  double conversion_reais= 0.059;
  double conversion_soles = 0.059;

  dollars = (conversion_peso * pesos)
  + (conversion_reais * reais)
  + (conversion_soles * soles);
std::cout << "US Dollars = $" << dollars <<"\n";
  
}