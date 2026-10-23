<?php
declare(strict_types=1);

/*
 * Group Members:
 *
 * TJ SEIMELA     - 223670863
 * SS MAINE       - 224139983
 * OR ITUMELENG   - 224370693
 * NT JABULANE    - 223898724
 */

// Ubuntu Bloom contact form processor.
// This project intentionally uses a CSV file instead of a database.

function clean_text(string $value): string {
    return trim(strip_tags($value));
}

function safe_csv_cell(string $value): string {
    $value = str_replace(["\r", "\n"], ' ', $value);
    if ($value !== '' && preg_match('/^[=+\-@]/', $value)) {
        $value = "'" . $value;
    }
    return $value;
}

function e(string $value): string {
    return htmlspecialchars($value, ENT_QUOTES, 'UTF-8');
}

$lang = $_POST['language'] ?? 'en';
if (!in_array($lang, ['en', 'zu', 'st'], true)) {
    $lang = 'en';
}

$messages = [
    'en' => [
        'successTitle' => 'Thank you for your message',
        'successText' => 'Your enquiry has been saved successfully. Ubuntu Bloom will reply as soon as possible.',
        'errorTitle' => 'We could not save your message',
        'errorText' => 'Please check your details and try again.',
        'back' => 'Back to Contact',
        'home' => 'Back to Home',
        'invalid' => 'Please submit the contact form with a valid name, email, topic and message.'
    ],
    'zu' => [
        'successTitle' => 'Siyabonga ngomlayezo wakho',
        'successText' => 'Umbuzo wakho ugcinwe ngempumelelo. Ubuntu Bloom izophendula ngokushesha ngangokunokwenzeka.',
        'errorTitle' => 'Asikwazanga ukugcina umlayezo wakho',
        'errorText' => 'Sicela uhlole imininingwane yakho bese uzama futhi.',
        'back' => 'Buyela Ekuxhumaneni',
        'home' => 'Buyela Ekhaya',
        'invalid' => 'Sicela uthumele ifomu elinegama, i-imeyili, isihloko nomlayezo ovumelekile.'
    ],
    'st' => [
        'successTitle' => 'Rea leboha ka molaetsa wa hao',
        'successText' => 'Potso ya hao e bolokilwe ka katleho. Ubuntu Bloom e tla araba kapele kamoo ho ka kgonehang.',
        'errorTitle' => 'Ha rea kgona ho boloka molaetsa wa hao',
        'errorText' => 'Ka kopo hlahloba dintlha tsa hao mme o leke hape.',
        'back' => 'Kgutlela ho Iteanye',
        'home' => 'Kgutlela Lehae',
        'invalid' => 'Ka kopo romela foromo e nang le lebitso, imeile, sehlooho le molaetsa o nepahetseng.'
    ]
];
$t = $messages[$lang];

$success = false;
$detail = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = clean_text($_POST['name'] ?? '');
    $email = clean_text($_POST['email'] ?? '');
    $phone = clean_text($_POST['phone'] ?? '');
    $topic = clean_text($_POST['topic'] ?? '');
    $message = clean_text($_POST['message'] ?? '');

    $validTopics = ['plant-enquiry', 'care-question', 'nursery-visit', 'other'];
    $valid = strlen($name) >= 2
        && filter_var($email, FILTER_VALIDATE_EMAIL)
        && in_array($topic, $validTopics, true)
        && strlen($message) >= 10;

    if ($valid) {
        $dataDir = __DIR__ . DIRECTORY_SEPARATOR . 'data';
        if (!is_dir($dataDir)) {
            @mkdir($dataDir, 0775, true);
        }

        $filePath = $dataDir . DIRECTORY_SEPARATOR . 'messages.csv';
        $isNew = !file_exists($filePath) || filesize($filePath) === 0;
        $handle = @fopen($filePath, 'ab');

        if ($handle !== false && flock($handle, LOCK_EX)) {
            if ($isNew) {
                fputcsv($handle, ['date', 'name', 'email', 'phone', 'topic', 'message', 'language']);
            }
            $row = [
                date('Y-m-d H:i:s'),
                safe_csv_cell($name),
                safe_csv_cell($email),
                safe_csv_cell($phone),
                safe_csv_cell($topic),
                safe_csv_cell($message),
                safe_csv_cell($lang)
            ];
            $success = fputcsv($handle, $row) !== false;
            flock($handle, LOCK_UN);
            fclose($handle);
        }

        if (!$success) {
            $detail = $t['errorText'];
        }
    } else {
        $detail = $t['invalid'];
    }
} else {
    $detail = $t['invalid'];
}

$title = $success ? $t['successTitle'] : $t['errorTitle'];
$text = $success ? $t['successText'] : ($detail ?: $t['errorText']);
$titleKey = $success ? 'formSuccessTitle' : 'formErrorTitle';
$textKey = $success ? 'formSuccessText' : (($detail === $t['invalid']) ? 'processInvalid' : 'formErrorText');
?>
<!doctype html>
<html lang="<?= e($lang) ?>">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Ubuntu Bloom contact-form confirmation.">
  <title><?= e($title) ?> | Ubuntu Bloom</title>
  <link rel="icon" href="images/logo.svg" type="image/svg+xml">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
<a class="skip-link" href="#main">Skip to content</a>
<div class="topbar">
  <div class="container topbar-inner">
    <div class="topbar-group">
      <span>📍 18 Riverleaf Avenue, Vanderbijlpark, 1911</span>
      <a href="tel:+27165550148">☎ +27 16 555 0148</a>
    </div>
    <div class="topbar-group social-short">
      <a href="https://www.facebook.com/" target="_blank" rel="noopener">Facebook</a>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener">Instagram</a>
    </div>
  </div>
</div>
<header class="site-header">
  <div class="container header-inner">
    <a class="brand" href="index.html" aria-label="Ubuntu Bloom home">
      <img src="images/logo.svg" alt="Ubuntu Bloom leaf logo">
      <span class="brand-text"><strong>Ubuntu Bloom</strong><span>PLANT NURSERY &amp; PLANT CARE CENTRE</span></span>
    </a>
    <div class="nav-wrap">
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="main-nav" aria-label="Open navigation"><span></span></button>
      <nav class="main-nav" id="main-nav" aria-label="Main navigation">
        <ul>
          <li><a href="index.html" data-i18n="home">Home</a></li>
          <li class="nav-item-dropdown">
            <button class="dropdown-toggle" type="button" aria-expanded="false" data-i18n="plants">Plants</button>
            <ul class="dropdown-menu">
              <li><a href="plants.html?category=indoor" data-i18n="indoorPlants">Indoor Plants</a></li>
              <li><a href="plants.html?category=outdoor" data-i18n="outdoorPlants">Outdoor Plants</a></li>
              <li><a href="plants.html?category=succulent" data-i18n="succulents">Succulents</a></li>
              <li><a href="plants.html?category=herb" data-i18n="herbs">Herbs</a></li>
            </ul>
          </li>
          <li><a href="plant-care.html" data-i18n="plantCare">Plant Care</a></li>
          <li><a href="about.html" data-i18n="about">About Us</a></li>
          <li><a href="contact.html" data-i18n="contact" aria-current="page">Contact</a></li>
        </ul>
      </nav>
      <label class="sr-only" for="language-select" style="position:absolute;left:-9999px">Language</label>
      <select class="language-select" id="language-select" aria-label="Select language">
        <option value="en"<?= $lang === 'en' ? ' selected' : '' ?>>English</option>
        <option value="zu"<?= $lang === 'zu' ? ' selected' : '' ?>>isiZulu</option>
        <option value="st"<?= $lang === 'st' ? ' selected' : '' ?>>Sesotho</option>
      </select>
    </div>
  </div>
</header>
<main id="main">
  <section class="section section-soft">
    <div class="container">
      <article class="content-card confirmation-card">
        <div class="confirmation-icon" aria-hidden="true"><?= $success ? '🌿' : '⚠️' ?></div>
        <h1 data-i18n="<?= e($titleKey) ?>"><?= e($title) ?></h1>
        <p data-i18n="<?= e($textKey) ?>"><?= e($text) ?></p>
        <div class="hero-actions" style="justify-content:center;margin-top:24px">
          <a class="btn btn-dark" href="contact.html" data-i18n="backContact"><?= e($t['back']) ?></a>
          <a class="btn" style="border:1px solid #ccd4cc" href="index.html" data-i18n="backHome"><?= e($t['home']) ?></a>
        </div>
      </article>
    </div>
  </section>
</main>
<section class="cta-band">
  <div class="container cta-inner">
    <div><h2 data-i18n="ctaTitle">Ready to bring home something green?</h2><p data-i18n="ctaText">Browse our plants or send us an enquiry and we will help you choose.</p></div>
    <div class="hero-actions"><a class="btn btn-primary" href="plants.html" data-i18n="explorePlants">Explore Our Plants</a><a class="btn btn-secondary" href="contact.html" data-i18n="contactUs">Contact Us</a></div>
  </div>
</section>
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a class="brand" href="index.html"><img src="images/logo.svg" alt=""><span class="brand-text"><strong style="color:white">Ubuntu Bloom</strong><span style="color:#dce8dd">PLANT NURSERY &amp; PLANT CARE CENTRE</span></span></a>
        <p data-i18n="footerText">A friendly South African plant nursery helping people grow with confidence.</p>
      </div>
      <div><div class="footer-title" data-i18n="quickLinks">Quick Links</div><ul class="footer-links"><li><a href="index.html" data-i18n="home">Home</a></li><li><a href="plants.html" data-i18n="plants">Plants</a></li><li><a href="plant-care.html" data-i18n="plantCare">Plant Care</a></li><li><a href="about.html" data-i18n="about">About Us</a></li><li><a href="contact.html" data-i18n="contact">Contact</a></li></ul></div>
      <div><div class="footer-title" data-i18n="contactUs">Contact Us</div><ul class="footer-links"><li>📍 18 Riverleaf Avenue, Vanderbijlpark, 1911</li><li><a href="tel:+27165550148">☎ +27 16 555 0148</a></li><li><a href="mailto:hello@ubuntubloom.co.za">✉ hello@ubuntubloom.co.za</a></li></ul></div>
      <div><div class="footer-title" data-i18n="followUs">Follow Us</div><div class="socials"><a href="https://www.facebook.com/" target="_blank" rel="noopener" aria-label="Facebook">f</a><a href="https://www.instagram.com/" target="_blank" rel="noopener" aria-label="Instagram">◎</a><a href="https://www.youtube.com/" target="_blank" rel="noopener" aria-label="YouTube">▶</a></div><p style="margin-top:18px"><a class="text-link" style="color:#dce8dd" href="https://www.sanbi.org/" target="_blank" rel="noopener">SANBI</a> · <a class="text-link" style="color:#dce8dd" href="https://pza.sanbi.org/" target="_blank" rel="noopener">PlantZAfrica</a></p></div>
    </div>
    <div class="footer-bottom"><span data-i18n="copyright">© 2026 Ubuntu Bloom. All rights reserved.</span><span data-i18n="footerTagline">Grow together. Bloom together.</span></div>
  </div>
</footer>
<script>try{localStorage.setItem('ubuntuBloomLang', <?= json_encode($lang) ?>);}catch(_){}</script>
<script src="js/script.js"></script>
</body>
</html>
