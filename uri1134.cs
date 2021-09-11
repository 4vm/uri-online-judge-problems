using System; 

class URI {

    static void Main(string[] args) {
      
      
            int[] contador = new int[3];
            int cod = 0;
            
            do
            {
                cod = Convert.ToInt32(Console.ReadLine());
              
                switch (cod)
                {
                    case 1:
                      contador[0]++;
                      break;
                    case 2:
                      contador[1]++;
                      break;
                    case 3:
                      contador[2]++;
                      break;
                    case 4:
                        break;
                    default:                       
                        continue;
                }
            }
       
         while (cod != 4);
                    Console.WriteLine("MUITO OBRIGADO");
                    System.Console.WriteLine("Alcool: " + contador[0]);
                    System.Console.WriteLine("Gasolina: " + contador[1]);
                    System.Console.WriteLine("Diesel: " + contador[2]);
    }
}