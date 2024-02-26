#include <iostream>
using namespace std;  



enum Animal
{
};

int main() {
  //Âge du chien
  int dog_age = 5;
  //L'âge humain du chien à 2 ans est de 21 ans
  int early_years = 21;
  // Tous les années du chien après 2 ans comptent pour 4 années humaines
  int later_years = (dog_age - 2)*4;
  //On ajoute tout ce uqi a été dit précédemment dans une variable qui calcule tout
  int human_years = early_years + later_years;
  
  std::cout <<"Coucou, moi c'est [nom du chien], aujourd'hui j'ai " << human_years <<" ans en âge humain!\n";
}