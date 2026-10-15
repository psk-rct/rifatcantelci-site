// ========================================================
// İNTERAKTİF FONKSİYONLAR - KLİNİK PSİKOLOG RIFAT CAN TELCİ
// ========================================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Lucide İkonlarını Başlat
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // 2. Sayfa Kaydırıldığında Header Gölgelendirmesi
    const header = document.getElementById('mainHeader');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 30) {
            header.classList.add('shadow-sm', 'bg-warmCanvas/95');
            header.classList.remove('bg-warmCanvas/90');
        } else {
            header.classList.remove('shadow-sm', 'bg-warmCanvas/95');
            header.classList.add('bg-warmCanvas/90');
        }
    });

    // 3. Mobil Menü Açma / Kapama
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuOpenIcon = document.getElementById('menuOpenIcon');
    const menuCloseIcon = document.getElementById('menuCloseIcon');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }

    // Mobil menü bağlantılarına tıklanınca menüyü kapat
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!mobileMenu.classList.contains('hidden')) {
                toggleMobileMenu();
            }
        });
    });

    // 4. SSS Akordiyon Etkileşimi
    const faqButtons = document.querySelectorAll('.faq-btn');
    faqButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const content = btn.nextElementSibling;
            const icon = btn.querySelector('.faq-icon');
            const isExpanded = btn.getAttribute('aria-expanded') === 'true';

            // Diğer tüm açık akordiyonları kapat
            faqButtons.forEach(otherBtn => {
                if (otherBtn !== btn) {
                    otherBtn.setAttribute('aria-expanded', 'false');
                    otherBtn.nextElementSibling.classList.add('hidden');
                    const otherIcon = otherBtn.querySelector('.faq-icon');
                    if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
                }
            });

            // Seçileni aç/kapat
            if (isExpanded) {
                btn.setAttribute('aria-expanded', 'false');
                content.classList.add('hidden');
                if (icon) icon.style.transform = 'rotate(0deg)';
            } else {
                btn.setAttribute('aria-expanded', 'true');
                content.classList.remove('hidden');
                if (icon) icon.style.transform = 'rotate(180deg)';
            }
        });
    });

    // ESC tuşuyla modalları kapatma desteği
    // 5. Çerez Bildirimi Kontrolü
    const cookieConsent = localStorage.getItem('cookieConsent');
    const cookieBanner = document.getElementById('cookieBanner');
    if (!cookieConsent && cookieBanner) {
        setTimeout(() => {
            cookieBanner.classList.remove('hidden');
        }, 1200);
    }

    // ESC Tuşu ile Tüm Modalları Kapatma
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeBookingModal();
            closeArticleModal();
            closeEthicsModal();
            closeKvkkModal();
            closeCookieModal();
        }
    });
});

// Mobil Menüyü Açıp Kapatma Fonksiyonu
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuOpenIcon = document.getElementById('menuOpenIcon');
    const menuCloseIcon = document.getElementById('menuCloseIcon');

    if (mobileMenu) {
        const isHidden = mobileMenu.classList.contains('hidden');
        if (isHidden) {
            mobileMenu.classList.remove('hidden');
            menuOpenIcon.classList.add('hidden');
            menuCloseIcon.classList.remove('hidden');
        } else {
            mobileMenu.classList.add('hidden');
            menuOpenIcon.classList.remove('hidden');
            menuCloseIcon.classList.add('hidden');
        }
    }
}

// ========================================================
// ÇEREZ VE YASAL MODAL KONTROLLERİ
// ========================================================
function acceptCookies() {
    localStorage.setItem('cookieConsent', 'true');
    const cookieBanner = document.getElementById('cookieBanner');
    if (cookieBanner) {
        cookieBanner.classList.add('hidden');
    }
}

function openEthicsModal() {
    const modal = document.getElementById('ethicsModal');
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        if (window.lucide) window.lucide.createIcons();
    }
}

function closeEthicsModal() {
    const modal = document.getElementById('ethicsModal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

function openKvkkModal() {
    const modal = document.getElementById('kvkkModal');
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        if (window.lucide) window.lucide.createIcons();
    }
}

function closeKvkkModal() {
    const modal = document.getElementById('kvkkModal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

function openCookieModal() {
    const modal = document.getElementById('cookieModal');
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        if (window.lucide) window.lucide.createIcons();
    }
}

function closeCookieModal() {
    const modal = document.getElementById('cookieModal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

// ========================================================
// RANDEVU MODALI KONTROLLERİ
// ========================================================
function openBookingModal() {
    const modal = document.getElementById('bookingModal');
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closeBookingModal() {
    const modal = document.getElementById('bookingModal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

// Modal Randevu Formu Gönderimi (rifatcan@gmail.com adresine aktarılır)
function handleModalBookingSubmit(event) {
    event.preventDefault();
    const form = document.getElementById('modalBookingForm');
    const successMsg = document.getElementById('modalSuccess');
    const submitBtn = document.getElementById('modalSubmitBtn');

    // Anti-Spam / Robot Koruması
    const honey = form.querySelector('input[name="_honey"]')?.value;
    if (honey) {
        console.warn("Spam engellendi.");
        return;
    }
    const isHuman = document.getElementById('modalHumanCheck')?.checked;
    if (!isHuman) {
        alert("Lütfen güvenlik kutucuğunu ('Ben robot değilim') işaretleyiniz.");
        return;
    }

    const name = document.getElementById('modalFullName')?.value || '';
    const email = document.getElementById('modalEmail')?.value || '';
    const phone = document.getElementById('modalPhone')?.value || 'Belirtilmedi';
    const sessionType = document.getElementById('modalSessionType')?.value || '';
    const note = document.getElementById('modalNote')?.value || 'Not iletilmedi';

    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i><span>İletiliyor...</span>';
        if (window.lucide) window.lucide.createIcons();
    }

    // FormSubmit AJAX Servisi ile rifatcan@gmail.com adresine e-posta gönderimi
    fetch("https://formsubmit.co/ajax/rifatcan@gmail.com", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            _subject: `Yeni Hızlı Randevu Talebi: ${name}`,
            "Danışan Adı Soyadı": name,
            "E-Posta": email,
            "Telefon": phone,
            "Görüşme Şekli": sessionType,
            "Danışan Notu": note
        })
    }).catch(err => {
        console.log("E-posta servis kaydı:", err);
    }).finally(() => {
        if (form && successMsg) {
            form.classList.add('hidden');
            successMsg.classList.remove('hidden');
            if (window.lucide) window.lucide.createIcons();
        }
    });
}

// ========================================================
// SAYFA İÇİ ANA RANDEVU FORMU KONTROLLERİ
// ========================================================
function handleAppointmentSubmit(event) {
    event.preventDefault();
    const form = document.getElementById('appointmentForm');
    const successMsg = document.getElementById('formSuccessMessage');
    const submitBtn = document.getElementById('submitAppointmentBtn');

    // Anti-Spam / Robot Koruması
    const honey = form.querySelector('input[name="_honey"]')?.value;
    if (honey) {
        console.warn("Spam engellendi.");
        return;
    }
    const isHuman = document.getElementById('humanCheck')?.checked;
    if (!isHuman) {
        alert("Lütfen güvenlik kutucuğunu ('Ben robot değilim') işaretleyiniz.");
        return;
    }

    const name = document.getElementById('fullName')?.value || '';
    const email = document.getElementById('emailAddress')?.value || '';
    const phone = document.getElementById('phoneNumber')?.value || 'Belirtilmedi';
    const sessionType = document.getElementById('sessionType')?.value || '';
    const preferredTime = document.getElementById('preferredTime')?.value || 'Belirtilmedi';
    const previousTherapy = document.getElementById('previousTherapy')?.value || 'Belirtilmedi';
    const message = document.getElementById('messageNote')?.value || 'Not iletilmedi';

    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i><span>İletiliyor...</span>';
        if (window.lucide) window.lucide.createIcons();
    }

    // FormSubmit AJAX Servisi ile rifatcan@gmail.com adresine e-posta gönderimi
    fetch("https://formsubmit.co/ajax/rifatcan@gmail.com", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            _subject: `Yeni Danışmanlık Randevu Talebi: ${name}`,
            "Danışan Adı Soyadı": name,
            "E-Posta": email,
            "Telefon": phone,
            "Görüşme Tercihi": sessionType,
            "Tercih Edilen Zaman": preferredTime,
            "Daha Önceki Deneyim": previousTherapy,
            "Danışan Notu / Mesajı": message
        })
    }).catch(err => {
        console.log("E-posta servis kaydı:", err);
    }).finally(() => {
        if (form && successMsg) {
            form.classList.add('hidden');
            successMsg.classList.remove('hidden');
            if (window.lucide) window.lucide.createIcons();
            successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });
}

function resetAppointmentForm() {
    const form = document.getElementById('appointmentForm');
    const successMsg = document.getElementById('formSuccessMessage');
    const submitBtn = document.getElementById('submitAppointmentBtn');

    if (form && successMsg) {
        form.reset();
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<i data-lucide="send" class="w-4 h-4"></i><span>Randevu Talebini Gönder</span>';
        }
        form.classList.remove('hidden');
        successMsg.classList.add('hidden');
        if (window.lucide) window.lucide.createIcons();
    }
}

// ========================================================
// YAZILAR & MAKALELER MODAL OKUMA SİSTEMİ
// (Veriler articles-data.js dosyasından yüklenir)
// ========================================================
function openArticleModal(id) {
    if (typeof articlesData === 'undefined' || !articlesData[id]) return;
    const article = articlesData[id];

    const modal = document.getElementById('articleModal');
    const container = document.getElementById('articleModalContent');

    if (modal && container) {
        container.innerHTML = `
            <div class="mb-6">
                <span class="text-xs uppercase tracking-widest text-wood-700 font-bold">${article.category}</span>
                <h2 class="font-serif text-2xl sm:text-3xl font-bold text-sage-950 mt-2 mb-3 leading-tight">${article.title}</h2>
                <div class="flex items-center gap-3 text-xs text-stone-500 border-b border-warmBorder pb-4">
                    <span>${article.readTime}</span>
                    <span>•</span>
                    <span class="text-sage-800 font-semibold">Uzm. Klinik Psikolog Rıfat Can Telci</span>
                </div>
            </div>
            <div class="prose prose-stone max-w-none text-sm sm:text-base leading-relaxed space-y-4">
                ${article.content}
            </div>
            <div class="mt-8 pt-6 border-t border-warmBorder flex justify-end">
                <button onclick="closeArticleModal(); openBookingModal();" class="px-6 py-2.5 bg-sage-800 text-white rounded-full text-xs font-semibold hover:bg-sage-900 transition-colors shadow-sm">
                    Randevu Al
                </button>
            </div>
        `;

        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        if (window.lucide) window.lucide.createIcons();
    }
}

function closeArticleModal() {
    const modal = document.getElementById('articleModal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }
}
