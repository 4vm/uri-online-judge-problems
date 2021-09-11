using System; 

class minhaClasse {

        public static void Main()
        {
            int n;
            n = int.Parse(Console.ReadLine());
            //complete seu codigo
            for (int i = 1; i <= n; i++) //complete seu codigo
            {
              if (i % 2 != 0) {
                Console.WriteLine(i);
              }
            }
            Console.ReadLine();
        }
}