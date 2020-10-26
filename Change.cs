using System;
using System.Collections.Generic;
using System.Linq;

namespace Fall_nr_2_Örfu
{
    public class Change
    {
        static public void ChangeContact()
        {
            int valMeny1 = 0;
            do
            {
                try
                {

                    Console.WriteLine("I vilken vill du ändra\n1. Privatkontakter.\n2. Jobbkontakter\n3. Tillbaka");
                    valMeny1 = Convert.ToInt32(Console.ReadLine());
                    switch (valMeny1)
                    {
                        case 1:

                            Console.Clear();
                            Lista_hantera.ÖppnarListan(Program.privatKontaktLista);
                            ChangeList(Program.jobbKontaktLista);
                            break;
                        case 2:

                            Console.Clear();
                            Lista_hantera.ÖppnarListan(Program.jobbKontaktLista);
                            ChangeList(Program.privatKontaktLista);
                            break;
                        case 3:
                            Console.Clear();
                            Lista_hantera.VisaLista();
                            break;
                        default:
                            Console.Clear();
                            Console.WriteLine("Du måste välja ett motsvarande menyval med siffer tangenterna");

                            break;
                    }
                }
                catch (Exception error)
                {
                    Console.WriteLine(error.Message + "Tryck på valfri tanget");
                    Console.ReadKey();
                    Console.Clear();
                    valMeny1 = 3;
                }
            }
            while (valMeny1 >= 4);




        }
        internal static void ChangeList(List<IKontakt> KontaktLista)
        {
            int valMeny1 = 0;
            int a;
            int b;
            string välj = "Välj kontakt du vill ändra med hjälp av siffran framför dennes namn. ";
            do
            {
                try
                {
                    Console.Clear();
                    Console.WriteLine("Vad vill du ändra?\n1. Namn | 2. Address | 3. Nummer | 4. Email ");
                    valMeny1 = Convert.ToInt32(Console.ReadLine());
                    switch (valMeny1)
                    {
                        case 1:
                            Lista_hantera.TextToColor(välj);
                            Lista_hantera.ÖppnarListan(KontaktLista);
                            a = Convert.ToInt32(Console.ReadLine());
                            b = (a - 1);
                            Console.WriteLine($"Skriv in det nya namnet för {KontaktLista.ElementAt(b).Namn}");
                            string newName = Console.ReadLine();
                            KontaktLista.ElementAt(b).Namn = newName;
                            Console.Clear();
                            Lista_hantera.VisaLista();
                            break;
                        case 2:
                            Lista_hantera.TextToColor(välj);
                            Lista_hantera.ÖppnarListan(KontaktLista);
                            a = Convert.ToInt32(Console.ReadLine());
                            b = (a - 1);
                            Console.WriteLine($"Skriv in en ny adress till {KontaktLista.ElementAt(b).Namn}");
                            string newAdress = Console.ReadLine();
                            KontaktLista.ElementAt(b).Address = newAdress;
                            Console.Clear();
                            Lista_hantera.VisaLista();
                            break;
                        case 3:
                            Lista_hantera.TextToColor(välj);
                            Lista_hantera.ÖppnarListan(KontaktLista);
                            a = Convert.ToInt32(Console.ReadLine());
                            b = (a - 1);
                            Console.WriteLine($"Skriv in ett nytt mobilnummer till {KontaktLista.ElementAt(b).Namn}");
                            string newNumber = Console.ReadLine();
                            KontaktLista.ElementAt(b).Nummer = newNumber;
                            Console.Clear();
                            Lista_hantera.VisaLista();
                            break;
                        case 4:
                            Lista_hantera.TextToColor(välj);
                            Lista_hantera.ÖppnarListan(KontaktLista);
                            a = Convert.ToInt32(Console.ReadLine());
                            b = (a - 1);
                            Console.WriteLine($"Skriv in ny email till {KontaktLista.ElementAt(b).Namn}");
                            string newEmail = Console.ReadLine();
                            KontaktLista.ElementAt(b).Epost = newEmail;
                            Console.Clear();
                            Lista_hantera.VisaLista();
                            break;
                        default:
                            Console.Clear();
                            Console.WriteLine("Du måste välja ett motsvarande menyval med siffer tangenterna");
                            break;
                    }
                }
                catch (Exception error)
                {
                    Console.WriteLine(error.Message + "Tryck på valfri tanget");
                    Console.ReadKey();
                    Console.Clear();
                    valMeny1 = 5;
                }
            }
            while (valMeny1 >= 4);

        }
    }
}
