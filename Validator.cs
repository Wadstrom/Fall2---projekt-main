using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;

namespace Fall_nr_2_Örfu
{
    static class Validator
    {
        public static string ValidateName(string name)
        {
            if (name == string.Empty || name.All(char.IsDigit))
                throw new Exception("Du måste mata in ett namn som enbart innehåller bokstäver!");
            else
                return name;
        }

        public static string ValidateNumber(string name)
        {
            if (!name.All(char.IsDigit))
                throw new Exception("Ett nummer får bara innehålla siffror!");
            else
                return name;
        }
    }
}
