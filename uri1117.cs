using System;
using System.Collections.Generic;
using System.Linq;

class Program
{
  static void Main(string[] args)
  {
          double notas = 0;
          int contador = 0;
                      
          do
          {
          double notaEntradaConsole = double.Parse(Console.ReadLine());
                          
          if(notaEntradaConsole < 0 || notaEntradaConsole > 10)
          {
          Console.WriteLine("nota invalida");
          } else {
          contador++;
          notas += notaEntradaConsole; 
          }
                        
        } while (contador < 2);
                    
      Console.WriteLine("media = " + (notas / 2).ToString("N2"));
  }
}