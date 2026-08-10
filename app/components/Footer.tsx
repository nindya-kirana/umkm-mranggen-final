import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2D2926] text-white">

      {/* =========================================================
          MOBILE FOOTER
      ========================================================= */}

      <div className="px-6 py-12 md:hidden">

        {/* Logo */}

        <Link href="/" className="inline-block">
          <h2 className="text-3xl leading-none tracking-tight">
            <span className="block font-black text-[#D9C7B8]">
              UMKM
            </span>

            <span className="block font-light text-[#D9C7B8]">
              MRANGGEN
            </span>
          </h2>
        </Link>


        {/* Description */}

        <p className="mt-6 max-w-sm text-sm leading-6 text-white/60">
          Mengenal, menemukan, dan mendukung UMKM lokal
          Desa Mranggen melalui informasi usaha yang mudah
          diakses oleh masyarakat.
        </p>


        {/* Copyright */}

        <div className="mt-10 border-t border-white/10 pt-6 text-center">

          <p className="text-xs leading-5 text-white/50">
            © {new Date().getFullYear()} KKN-T 78 - Desa Mranggen.
            <br />
            Seluruh hak cipta dilindungi.
          </p>

        </div>

      </div>


      {/* =========================================================
          DESKTOP FOOTER
      ========================================================= */}

      <div className="hidden md:block">

        <div className="mx-auto max-w-7xl px-8 py-16 lg:px-10">

          <div className="grid gap-16 md:grid-cols-3">

            {/* Logo + Description */}

            <div>

              <Link href="/" className="inline-block">

                <h2 className="text-4xl leading-none tracking-tight">

                  <span className="block font-black text-[#D9C7B8]">
                    UMKM
                  </span>

                  <span className="block font-light text-[#D9C7B8]">
                    MRANGGEN
                  </span>

                </h2>

              </Link>

              <p className="mt-6 max-w-sm leading-7 text-white/60">
                Website informasi UMKM Desa Mranggen untuk
                membantu masyarakat mengenal, menemukan,
                dan mendukung usaha lokal.
              </p>

            </div>


            {/* Navigasi */}

            <div>

              <p className="text-sm font-black tracking-[0.25em] text-[#D9C7B8]">
                NAVIGASI
              </p>

              <div className="mt-6 flex flex-col gap-4">

                <Link
                  href="/"
                  className="text-white/70 transition hover:text-white"
                >
                  Beranda
                </Link>

                <Link
                  href="/umkm"
                  className="text-white/70 transition hover:text-white"
                >
                  Daftar UMKM
                </Link>

                <Link
                  href="/#tentang-mranggen"
                  className="text-white/70 transition hover:text-white"
                >
                  Tentang Mranggen
                </Link>

              </div>

            </div>


            {/* Tentang */}

            <div>

              <p className="text-sm font-black tracking-[0.25em] text-[#D9C7B8]">
                TENTANG
              </p>

              <p className="mt-6 max-w-md leading-7 text-white/60">
                Website ini dikembangkan untuk mendukung
                perkembangan ekonomi lokal Desa Mranggen
                dan mempermudah akses informasi bagi
                masyarakat.
              </p>

            </div>

          </div>


          {/* Bottom */}

          <div className="mt-16 flex items-center justify-between border-t border-white/10 pt-8">

            <p className="text-sm text-white/40">
              © {new Date().getFullYear()} KKN-T 78 - Desa Mranggen.
              Seluruh hak cipta dilindungi.
            </p>

            <p className="text-sm text-white/40">
              Mendukung UMKM, Mengembangkan Ekonomi Lokal.
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}