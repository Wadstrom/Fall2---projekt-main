using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;

namespace Fall_nr_2_Örfu
{
    static class Search<T> where T : IKontakt // "type" som ersätter T generic parameters måste implementera IKontakt
    {
        static public List<T> Contacts { get; set; }

        // specific searching hejsan!
        static public List<T> SearchByName(string name)
        {

            return Contacts.FindAll(contact => contact.Namn == name);
        }


        static public List<T> SearchByAddress(string address)
        {

            return Contacts.FindAll(contact => contact.Address == address);
        }

        static public List<T> SearchByEmail(string email)
        {

            return Contacts.FindAll(contact => contact.Epost == email);
        }

        static public List<T> SearchByNumber(string number)
        {

            return Contacts.FindAll(contact => contact.Nummer == number);
        }


        // display
        static public List<T> DisplayForUser()
        {
            string[] options = new string[] { "Namn", "Address", "Epost" , "Nummer"};
            DisplayMeny(options);
            int choice = ChoosedOptionFromUser(options);

            switch (choice)
            {
                case 1:
                    string name = GetInput(options[0], false, false).ToLower();
                    return SearchByName(name);
                case 2:
                    string address = GetInput(options[1], true, true);
                    return SearchByAddress(address);
                case 3:
                    string email = GetInput(options[2], true, true); // make it so that it only allows '_', '-', '@' and '.'
                    return SearchByEmail(email);
                case 4:
                    string number = GetNumberInput(options[3]); 
                    return SearchByNumber(number);
                default:
                    throw new Exception("Om du ser det här meddelandet, Ropa på Salim!");
            }
        }

        static private void DisplayMeny(string[] options)
        {
            Console.WriteLine("Vad vill du söka på?");
            Console.WriteLine("--------------------------");


            for (int i = 0; i < options.Length; i++)
            {
                Console.WriteLine($"({i + 1}) {options[i]}");
            }
        }

        static private int ChoosedOptionFromUser(string[] options)
        {
            int choice = 0;
            bool condition;

            do
            {
                Console.Write($"Välj ett val ({1}-{options.Length}): ");
                try
                {
                    choice = Convert.ToInt32(Console.ReadLine());
                }
                catch (Exception)
                {
                    choice = 0;
                }

                condition = choice < 1 || choice > options.Length;
                if (condition)
                {
                    Console.ForegroundColor = ConsoleColor.Yellow;
                    Console.WriteLine("Ogiltigt val kompis, prova igen!");
                    Console.ResetColor();
                }
            } while (condition);
            return choice;
        }

        // Form
        static private string GetInput(string msg, bool charAllowed = false, bool numberAllowed = false)
        {
            string text = "";
            bool condition;

            do
            {
                Console.Write($"ange {msg}: ");
                text = Console.ReadLine();

                if (!charAllowed && !numberAllowed)
                    condition = text == string.Empty || !String.Concat(text.Where(c => !Char.IsWhiteSpace(c))).All(char.IsLetter);
                else if (charAllowed && !numberAllowed)
                    condition = text == string.Empty || text.All(char.IsDigit);
                else if (!charAllowed && numberAllowed)
                    condition = text == string.Empty || !text.All(char.IsLetterOrDigit);
                else
                    condition = text == string.Empty;

                if (condition)
                {
                    //Console.ForegroundColor = ConsoleColor.Red;
                    Console.WriteLine($"Ogiltigt {msg} inmatning!");
                    //Console.ResetColor();
                }
            } while (condition);
            return text;
        }


        static private string GetAddressInput(string msg)
        {
            string text = "";
            bool condition;

            do
            {
                Console.Write($"Ange {msg}: ");
                text = Console.ReadLine();

                condition = text == string.Empty || !String.Concat(text.Where(c => !Char.IsWhiteSpace(c))).All(char.IsLetterOrDigit);
                
                if (condition)
                {
                    //Console.ForegroundColor = ConsoleColor.Red;
                    Console.WriteLine($"Ogiltigt {msg} inmatning!");
                    //Console.ResetColor();
                }
            } while (condition);
            return text;
        }

        static private string GetNumberInput(string number)
        {
            string text = "";
            bool condition;

            do
            {
                Console.Write($"Ange {number}: ");
                text = Console.ReadLine();

                condition = text == string.Empty || !text.All(char.IsDigit);

                if (condition)
                {
                    //Console.ForegroundColor = ConsoleColor.Red;
                    Console.WriteLine($"Ogiltigt {number} inmatning!");
                    //Console.ResetColor();
                }
            } while (condition);
            return text;
        }
    }
}