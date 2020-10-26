namespace Fall_nr_2_Örfu
{
    /// <summary>
    ///  Möjlighet till flera telefon nummer på en kontakt
    /// Möjlighet tillatt ändra en konntakt
    /// Lista alla kontakter
    /// Sök funktion på t.ex namn tele, adress.
    /// Idiotsäkra från felaktiga inmatningar.
    /// Feedback om fel görs - felmeddelande.
    /// </summary>

    class JobbKontakt : IKontakt
    {
        string namn;
        public string Namn { get=> namn; set => namn = value.ToLower(); }
        public string Address { get; set; }
        public string Nummer { get; set; }
        public string Epost { get; set; }

        public JobbKontakt(string namn, string address, string nummer, string epost)
        {
            Namn = namn.ToLower();
            Address = address;
            Nummer = nummer;
            Epost = epost;

        }
        public JobbKontakt()
        { }
    }
    class PrivatKontakt : IKontakt
    {
        string namn;
        public string Namn { get => namn; set => namn = value.ToLower(); }
        public string Address { get; set; }
        public string Nummer { get; set; }
        public string Epost { get; set; }

        public PrivatKontakt(string namn, string address, string nummer, string epost)
        {
            Namn = namn.ToLower();
            Address = address;
            Nummer = nummer;
            Epost = epost;

        }
    }
}





