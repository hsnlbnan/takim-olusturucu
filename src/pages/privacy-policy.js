import React from "react";

export const PrivacyPolicy = () => {
  return (
    <>
      <div className="mx-auto mt-9 px-4 md:px-0 container">
        <a
          href="/"
          className="flex items-center mt-3 mb-4 text-2xl text-blue-600 hover:underline"
        >
          {/* chevron left */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Siteye Dön
        </a>

        <h1 className="mb-[20px] font-bold text-4xl text-gray-900 md:text-5xl lg:text-6xl leading-none tracking-tight">
          takim-
          <span className="underline underline-offset-3 decoration-8 decoration-blue-400">
            olustur
          </span>
          <span className="text-blue-700">.com</span>
        </h1>

        <p className="mb-[20px] font-normal text-gray-500 text-sm">
          <a
            href="https://www.linkedin.com/in/husnu/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline"
          >
            Hüsnü Lübnan
          </a>{" "}
          tarafından gelistirildi.
        </p>

        {/* Siteye Dön  */}

        <h1 className="mb-2 font-bold text-2xl">Gizlilik Politikası</h1>
        <p className="mb-2 font-normal text-sm">Son güncellenme: 20/05/2024</p>
        <p className="mb-4 text-md">
          Güvenliğiniz bizim için önemli. Bu sebeple bizimle paylaşacağınız
          kişisel verileriz hassasiyetle korunmaktadır.
        </p>
        <p className="mb-4 text-md">
          Biz, Takim Olustur, veri sorumlusu olarak, bu gizlilik ve kişisel
          verilerin korunması politikası ile, hangi kişisel verilerinizin hangi
          amaçla işleneceği, işlenen verilerin kimlerle ve neden
          paylaşılabileceği, veri işleme yöntemimiz ve hukuki sebeplerimiz ile;
          işlenen verilerinize ilişkin haklarınızın neler olduğu hususunda
          sizleri aydınlatmayı amaçlıyoruz.
        </p>
        <h2 className="mb-2 mb-2 font-semibold">
          Toplanan Kişisel Verileriniz, Toplanma Yöntemi ve Hukuki Sebebi
        </h2>
        <p className="mb-4 text-md">
          IP adresiniz ve kullanıcı aracısı bilgileriniz, sadece analiz yapmak
          amacıyla ve çerezler (cookies) vb. teknolojiler vasıtasıyla, otomatik
          veya otomatik olmayan yöntemlerle ve bazen de analitik sağlayıcılar,
          reklam ağları, arama bilgi sağlayıcıları, teknoloji sağlayıcıları gibi
          üçüncü taraflardan elde edilerek, kaydedilerek, depolanarak ve
          güncellenerek, aramızdaki hizmet ve sözleşme ilişkisi çerçevesinde ve
          süresince, meşru menfaat işleme şartına dayanılarak işlenecektir.
        </p>
        <h2 className="mb-2 mb-2 font-semibold">
          Kişisel Verilerinizin İşlenme Amacı
        </h2>
        <p className="mb-4 text-md">
          Bizimle paylaştığınız kişisel verileriniz sadece analiz yapmak
          suretiyle; sunduğumuz hizmetlerin gerekliliklerini en iyi şekilde
          yerine getirebilmek, bu hizmetlere sizin tarafınızdan ulaşılabilmesini
          ve maksimum düzeyde faydalanılabilmesini sağlamak, hizmetlerimizi,
          ihtiyaçlarınız doğrultusunda geliştirebilmek ve sizleri daha geniş
          kapsamlı hizmet sağlayıcıları ile yasal çerçeveler içerisinde
          buluşturabilmek ve kanundan doğan zorunlulukların (kişisel verilerin
          talep halinde adli ve idari makamlarla paylaşılması) yerine
          getirilebilmesi amacıyla, sözleşme ve hizmet süresince, amacına uygun
          ve ölçülü bir şekilde işlenecek ve güncellenecektir.
        </p>
        <h2 className="mb-2 mb-2 font-semibold">
          Toplanan Kişisel Verilerin Kimlere ve Hangi Amaçlarla Aktarılabileceği
        </h2>
        <p className="mb-4 text-md">
          Bizimle paylaştığınız kişisel verileriniz; faaliyetlerimizi yürütmek
          üzere hizmet aldığımız ve/veya verdiğimiz, sözleşmesel ilişki
          içerisinde bulunduğumuz, iş birliği yaptığımız, yurt içi ve yurt
          dışındaki 3. şahıslar ile kurum ve kuruluşlara ve talep halinde adli
          ve idari makamlara, gerekli teknik ve idari önlemler alınması koşulu
          ile aktarılabilecektir.
        </p>
        <h2 className="mb-2 mb-2 font-semibold">
          Kişisel Verileri İşlenen Kişi Olarak Haklarınız
        </h2>
        <p className="mb-4 text-md">
          KVKK madde 11 uyarınca herkes, veri sorumlusuna başvurarak aşağıdaki
          haklarını kullanabilir:
        </p>
        <ol type="a">
          <li>Kişisel veri işlenip işlenmediğini öğrenme,</li>
          <li>Kişisel verileri işlenmişse buna ilişkin bilgi talep etme,</li>
          <li>
            Kişisel verilerin işlenme amacını ve bunların amacına uygun
            kullanılıp kullanılmadığını öğrenme,
          </li>
          <li>
            Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü
            kişileri bilme,
          </li>
          <li>
            Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların
            düzeltilmesini isteme,
          </li>
          <li>Kişisel verilerin silinmesini veya yok edilmesini isteme,</li>
          <li>
            (e) ve (f) bentleri uyarınca yapılan işlemlerin, kişisel verilerin
            aktarıldığı üçüncü kişilere bildirilmesini isteme,
          </li>
          <li>
            İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz
            edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya
            çıkmasına itiraz etme,
          </li>
          <li>
            Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara
            uğraması hâlinde zararın giderilmesini talep etme, haklarına
            sahiptir.
          </li>
        </ol>
        <p className="mb-4 text-md">
          Yukarıda sayılan haklarınızı kullanmak üzere hsnlbnan@gmail.com
          üzerinden bizimle iletişime geçebilirsiniz.
        </p>
        <h2 className="mb-2 mb-2 font-semibold">İletişim</h2>
        <p className="mb-4 text-md">
          Sizlere hizmet sunabilmek amaçlı analizler yapabilmek için, sadece
          gerekli olan kişisel verilerinizin, işbu gizlilik ve kişisel verilerin
          işlenmesi politikası uyarınca işlenmesini, kabul edip etmemek
          hususunda tamamen özgürsünüz. Siteyi kullanmaya devam ettiğiniz
          takdirde kabul etmiş olduğunuz tarafımızca varsayılacak olup, daha
          ayrıntılı bilgi için bizimle hsnlbnan@gmail.com e-mail adresi
          üzerinden iletişime geçmekten lütfen çekinmeyiniz.
        </p>
        <p className="mb-4 text-md">
          Bu gizlilik politikası,{" "}
          <a href="https://sartlar.com">https://sartlar.com</a> aracılığıyla
          oluşturulmuştur.
        </p>
      </div>
    </>
  );
};
