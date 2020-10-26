using System;
using System.Collections.Generic;
namespace Fall_nr_2_Örfu
{
    /// <summary>
    /// Möjlighet till flera telefon nummer på en kontakt
    /// Möjlighet tillatt ändra en konntakt
    /// Lista alla kontakter
    /// Sök funktion på t.ex namn tele, adress.
    /// Idiotsäkra från felaktiga inmatningar.
    /// Feedback om fel görs - felmeddelande.
    /// INLÄMMNING TISDAG 27/10 16.00
    /// </summary>
    class Program
    {
        static internal List<IKontakt> privatKontaktLista = new List<IKontakt>();
        static internal List<IKontakt> jobbKontaktLista = new List<IKontakt>();
        static void Main(string[] args)
        {



            var pperson1 = new PrivatKontakt("John Svensson", "Enögdsgatan 22, 68222 Örebro", "0794404585", "johnsvensson@gmail.com");
            var pperson2 = new PrivatKontakt("Ulla Hunt", "Jägarvilan 7, 7333 Kilsmo", "0723341253", "ullis.huntis@yahoo.com");
            var pperson3 = new PrivatKontakt("Carl Myttare", "Svinstugan 7b, 74499 Uskavi", "0763231441", "callemytt2k12@gmail.com");

            var jperson1 = new JobbKontakt("Sven Smith", "Vingelvägen 27, 94555 Halmstad", "0703394445", "svensmith007@hotmail.com");
            var jperson2 = new JobbKontakt("Freja Lund", "Lyckegatan 101, 67442 Åmmeberg", "0760384992", "frejsan.lund@gmail.com");

            privatKontaktLista.Add(pperson1);
            privatKontaktLista.Add(pperson2);
            privatKontaktLista.Add(pperson3);

            jobbKontaktLista.Add(jperson1);
            jobbKontaktLista.Add(jperson2);


            Console.WriteLine("Hej och Välkommen till Grupp 1's Applikation. [Tryck ENTER]");
            Console.ReadKey();
            Console.Clear();
            Huvudmeny();
        }
        //-----------------------------------------HUVUDMENY-----------------------------------------------------
        public static void Huvudmeny()
        {
            int valMeny1 = 0;
            do
            {
                try
                {

                    string huvudtext = "Vad vill du göra idag?\n1. Visa lista/hantera.\n2. Sök i listorna.\n3. Exit";
                    Lista_hantera.TextToColor(huvudtext);
                    valMeny1 = Convert.ToInt32(Console.ReadLine());
                    switch (valMeny1)
                    {
                        case 1:
                            Console.Clear();
                            Lista_hantera.VisaLista();
                            break;
                        case 2:
                            List<IKontakt> allaListor = new List<IKontakt>();
                            allaListor.AddRange(Program.jobbKontaktLista);
                            allaListor.AddRange(Program.privatKontaktLista);
                            Search<IKontakt>.Contacts = allaListor;
                            List<IKontakt> hittadeLista = Search<IKontakt>.DisplayForUser();
                            Console.Clear();
                            try
                            {
                                Program.SökadeKontaktMeny(hittadeLista);
                            }
                            catch (Exception)
                            {
                                Huvudmeny();
                            }
                            break;
                        case 3:
                            Environment.Exit(0);
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
                    valMeny1 = 6;
                }
            }
            while (valMeny1 >= 4);

        }

        public static void SökadeKontaktMeny(List<IKontakt> lista)
        {
            if (lista.Count == 0)
                OhittadeKontakter();
            else
                HittadeKontakter(lista);
        }

        private static void HittadeKontakter(List<IKontakt> lista)
        {
            string text = "|1. Ändra kontakt | 2. Tillbaka |";
            Lista_hantera.TextToColor(text);

            Lista_hantera.ÖppnarListan(lista);
            Console.WriteLine();

            int val = 0;
            bool condition;
            do
            {
                Console.Write("välj ett val: ");
                try
                {
                    val = Convert.ToInt32(Console.ReadLine());
                }
                catch (Exception)
                {

                    val = 0;
                }
                condition = (val < 1 || val > 2) ? true : false;
                if (condition)
                    Console.WriteLine("Fel val, prova igen!");
            } while (condition);

            if (val == 1)
                Change.ChangeList(lista);
            else if (val == 2)
                Console.Clear();
            throw new Exception();
        }

        private static void OhittadeKontakter()
        {
            string text = "|1. Tillbaka |";
            Lista_hantera.TextToColor(text);

            Console.WriteLine();
            Console.WriteLine("INFO: sökning hittade fick ingen resultat!\nTryck på en tangent...");

            Console.ReadLine();
            Console.Clear();
            throw new Exception();
        }
    }


}



