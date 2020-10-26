using System;
using System.Collections.Generic;
using System.Data.SqlTypes;
using System.Globalization;
using System.Linq.Expressions;

namespace Fall_nr_2_Örfu
{
    class Lista_hantera
    {

         

//-SKAPAR OCH VISAR--------------------------------------------------------------------------------------
        static public void VisaLista()
        {
            //"GUI"
            Console.Clear();
            string text = "| 1. Sök | 2. Lägg till kontakt | 3. Ändra kontakt | 4. Tillbaka |";
            TextToColor(text);

            //objekt
            

            //VISAR listan, metod "ÖppnarListan" kolla nedan
            string text2 = "Kontakter privat: ";
            TextToColor(text2);
            ÖppnarListan(Program.privatKontaktLista);


            string text3 = "\nKontakter jobb: ";
            TextToColor(text3);
            ÖppnarListan(Program.jobbKontaktLista);


            //Val som man kan göra, genom while loop och switch
            bool loopContinue = true;
            while (loopContinue == true)
            {

                Console.WriteLine(" ");
                int val = Convert.ToInt32(Console.ReadLine());

                switch (val)
                {
                    case 1:
                        List<IKontakt> allaListor = new List<IKontakt>();
                        allaListor.AddRange(Program.jobbKontaktLista);
                        allaListor.AddRange(Program.privatKontaktLista);
                        Search<IKontakt>.Contacts = allaListor;
                        List<IKontakt> hittadeLista =  Search<IKontakt>.DisplayForUser();
                        Console.Clear();
                        try
                        {
                            Program.SökadeKontaktMeny(hittadeLista);
                        }catch(Exception)
                        {
                            VisaLista();
                        }
                        /*
                         * {sökadeKontakterMeny(lista)}
                         * visa val meny {'ändra', 'tillbaka'}
                         * ÖppnarListan(lista)
                         * switch {ändra, tillbaka}
                         * 
                         * ändra:
                         *     ChangeList(lista)
                         *     
                         * tillbaka:
                         *     throw an error 
                         *     to go back
                         */

                        loopContinue = false;
                        break;

                    case 2:
                        Console.Clear();
                        Meny2();
                        loopContinue = false;
                        break;

                    case 3:
                        Console.Clear();
                        Change.ChangeContact();
                        loopContinue = false;
                        break;

                    case 4:
                        Console.Clear();
                        Program.Huvudmeny();
                        loopContinue = false;
                        break;

                    default:
                        Console.WriteLine("Ogiltigt val. Använd siffertangenterna och gör ett val (1, 2, 3, eller 4)");

                        loopContinue = true;
                        break;
                }
            }

        }

        
//--VISAR LISTAN OCH STRUKTURERAR--------------------------------------------------------------------
        public static void ÖppnarListan(List<IKontakt> KontaktLista)
        {
            
            int i = 1;
            foreach (var uppgift in KontaktLista)
            {
                //tar ut int längd från varje namn/adress/nummer
                //för att veta hur mycket mellanrum mellan varandra

                int namnLength = uppgift.Namn.Length;
                int addressLength = uppgift.Address.Length;
                int NummerLength = uppgift.Nummer.Length;
                int EpostLength = uppgift.Epost.Length;

                string namn = uppgift.Namn;
                string address = uppgift.Address;
                string nummer = uppgift.Nummer;
                string epost = uppgift.Epost;

                while (namnLength < 15)
                {
                    ++namnLength;
                    namn = namn + new string(" ");
                }

                while (addressLength < 32)
                {
                    ++addressLength;
                    address = address + new string(" ");
                }

                while (NummerLength < 12)
                {
                    ++NummerLength;
                    nummer = nummer + new string(" ");
                }

                while (EpostLength < 16)
                {
                    ++EpostLength;
                    epost = epost + new string(" ");
                }
                
                Console.WriteLine($"{i}. Namn: {CultureInfo.CurrentCulture.TextInfo.ToTitleCase(namn.ToLower())} Address: {address} Nummer: {nummer} Epost: {epost}");
                i++;
            }
        }
//-FÄRG METOD------------------------------------------------------------------------------------------
        public static void TextToColor(string text)
        {
            Console.ForegroundColor = ConsoleColor.Yellow;
            Console.WriteLine(text);
            Console.WriteLine("");
            Console.ForegroundColor = ConsoleColor.Gray;
        }
//--LÄGGER TILL------------------------------------------------------------------------------------------
        static public void AddContacts(List<IKontakt> lista)
        {
            string mataUtLista = string.Empty;
            JobbKontakt contactinfo = new JobbKontakt();

            do
            {
                try
                {
                    
                    Console.Write("Namn: ");
                    string name = Validator.ValidateName(Console.ReadLine());

                    Console.Write("Adress: ");
                    string adress = Validator.ValidateName(Console.ReadLine());

                    Console.Write("Email: ");
                    string email = Console.ReadLine();

                    Console.Write("MobilNummer: ");
                    string phoneNumber = Validator.ValidateNumber(Console.ReadLine());

                    JobbKontakt test = new JobbKontakt(name, adress, phoneNumber, email);
                    lista.Add(test);

                    Console.WriteLine("\nVill du lägga till en till kontakt klicka enter");
                    Console.WriteLine("Annars matar du in X");

                    mataUtLista = Console.ReadLine();
                    Console.Clear();
                }
                catch (Exception error)
                {
                    Console.WriteLine(error.Message);
                }
            }
            while (mataUtLista != "X" && mataUtLista != "x");
            Console.Clear();

            VisaLista();

        }
//--MENY2------------------------------------------------------------------------------------------------
       static public void Meny2()
        {
            int valMeny1 = 0;
            do
            {
                try
                {

                    Console.WriteLine("Vill du lägga till\n1. Privatkontakt.\n2. Jobbkontakt\n3. Tillbaka");
                    valMeny1 = Convert.ToInt32(Console.ReadLine());
                    switch (valMeny1)
                    {
                        case 1:
                            Console.Clear();
                            AddContacts(Program.privatKontaktLista);
                            break;
                        case 2:
                            Console.Clear();
                            AddContacts(Program.jobbKontaktLista);
                            break;                                  
                        case 3:
                            Console.Clear();
                            VisaLista();
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
    }
}


