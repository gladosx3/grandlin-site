import { Phone, MapPin, Clock } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-transparent to-[#051923]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#F5F9FC] mb-4">
          Fond de l'Océan
        </h2>
        <p className="text-lg text-[#F5F9FC]/70 mb-12">
          Fin de votre voyage. Contactez-nous pour démarrer votre aventure.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#0B3C5D]/40 backdrop-blur-sm rounded-xl p-6 border border-[#F5F9FC]/10">
            <Phone className="w-10 h-10 text-[#F2C94C] mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-[#F5F9FC] mb-2">
              Téléphone
            </h3>
            <p className="text-[#F5F9FC]/80">01 23 45 67 89</p>
          </div>

          <div className="bg-[#0B3C5D]/40 backdrop-blur-sm rounded-xl p-6 border border-[#F5F9FC]/10">
            <MapPin className="w-10 h-10 text-[#F2C94C] mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-[#F5F9FC] mb-2">
              Adresse
            </h3>
            <p className="text-[#F5F9FC]/80">
              123 Rue des Cartes
              <br />
              75001 Paris
            </p>
          </div>

          <div className="bg-[#0B3C5D]/40 backdrop-blur-sm rounded-xl p-6 border border-[#F5F9FC]/10">
            <Clock className="w-10 h-10 text-[#F2C94C] mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-[#F5F9FC] mb-2">
              Horaires
            </h3>
            <p className="text-[#F5F9FC]/80">
              Lun - Sam: 10h - 19h
              <br />
              Dimanche: Fermé
            </p>
          </div>
        </div>

        <a
          href="tel:0123456789"
          className="inline-flex items-center gap-3 bg-[#F2C94C] hover:bg-[#F2C94C]/90 text-[#051923] font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[#F2C94C]/50"
        >
          <Phone className="w-5 h-5" />
          Appeler le magasin
        </a>

        <div className="mt-16 pt-8 border-t border-[#F5F9FC]/10">
          <p className="text-[#F5F9FC]/50 text-sm">
            © 2024 GRANDLINE - Tous droits réservés
          </p>
        </div>
      </div>
    </section>
  );
}
