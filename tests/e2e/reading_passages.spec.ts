import { test, expect } from '@playwright/test';

test.describe('Source-aware reading passages', () => {
  test('third intermediate shows the verified Ibrahim original text', async ({ page }) => {
    await page.goto('/grade/third-intermediate/unit/104/lesson/3rd-u4-l3');
    await page.waitForLoadState('networkidle');

    await page.getByRole('button', { name: 'نص القراءة الأصلي' }).click();
    await expect(page.getByRole('heading', { name: 'النص الإنجليزي الكامل' })).toBeVisible();
    await expect(page.locator('p[lang="en"]').first()).toContainText('Ibrahim lived in a small village in the south of Iraq');
    await expect(page.getByText('ملزمة الثالث المتوسط 2025')).toBeVisible();
    await expect(page.getByText('نص مطابق للمصدر المرفق')).toBeVisible();
  });

  test('fourth preparatory shows the verified Wedding Customs passage', async ({ page }) => {
    await page.goto('/grade/fourth-preparatory/unit/45/lesson/4th-u5-l4');
    await page.waitForLoadState('networkidle');

    await page.getByRole('button', { name: 'نص القراءة الأصلي' }).click();
    await expect(page.locator('p[lang="en"]').first()).toContainText('Weddings are different from country to country');
    await expect(page.getByText('In Iraq, the bride wears white to symbolize purity.')).toBeVisible();
    await expect(page.getByText('نص مطابق للمصدر المرفق')).toBeVisible();
  });

  test('fifth preparatory mixed reading/grammar lesson shows its full Souq Al-Shorja text', async ({ page }) => {
    await page.goto('/grade/fifth-preparatory/unit/51/lesson/5th-u1-l3');
    await page.waitForLoadState('networkidle');

    await page.getByRole('button', { name: 'نص القراءة الأصلي' }).click();
    await expect(page.locator('p[lang="en"]').first()).toContainText('Last week, I visited a very special place in Baghdad');
    await expect(page.getByText('Souq Al-Shorja isn’t just a simple market')).toBeVisible();
    await expect(page.getByText('نص مطابق للمصدر المرفق')).toBeVisible();
  });

  test('sixth preparatory opens Ammar as a complete source-backed passage dossier', async ({ page }) => {
    await page.goto('/grade/sixth-preparatory/passages');
    await page.waitForLoadState('networkidle');

    const library = page.getByTestId('grade-book-passage-library');
    const ammarCard = library.getByTestId('book-passage-card').filter({ hasText: "Ammar's Story" });
    await expect(ammarCard).toBeVisible();
    await ammarCard.getByRole('button', { name: 'فتح القطعة كاملة' }).click();

    await expect(page.getByTestId('reading-passage-dossier')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'النص الإنجليزي الكامل' })).toBeVisible();
    await expect(page.locator('[data-testid="original-passage-section"] p[lang="en"]').first()).toContainText('When I was 16, life was great!');
    await expect(page.getByRole('heading', { name: 'الترجمة العربية الكاملة' })).toBeVisible();
    await expect(page.getByTestId('passage-translation-section')).toContainText('عندما كنتُ في السادسة عشرة من عمري');
    await expect(page.getByRole('heading', { name: 'أسئلة كتاب النشاط / الملزمة مع الإجابات' })).toBeVisible();
    await expect(page.getByTestId('passage-exercises-section')).toContainText('What was Ammar’s life like when he was 16?');
    await expect(page.getByTestId('passage-exercises-section')).toContainText('It was great because he was finally part of the school basketball team');
  });
  test('sixth preparatory Samira passage includes its full translation and Activity Book answers', async ({ page }) => {
    await page.goto('/grade/sixth-preparatory');
    await page.waitForLoadState('networkidle');
    const library = page.getByTestId('grade-book-passage-library');
    const unitThree = library.locator('[data-testid="book-passage-unit-group"][data-unit-id="3"]');
    await unitThree.getByRole('button').click();
    const samiraCard = library.getByTestId('book-passage-card').filter({ hasText: 'Samira Al Mahmoud' });
    await expect(samiraCard).toBeVisible();
    await samiraCard.getByRole('button', { name: 'فتح القطعة كاملة' }).click();
    await expect(page.getByTestId('original-passage-section')).toContainText('the annual Arab Oil Industry Conference');
    await expect(page.getByTestId('passage-translation-section')).toContainText('المؤتمر السنوي لصناعة النفط العربية');
    await expect(page.getByTestId('passage-exercises-section')).toContainText('What languages can Samira speak? How did she learn them?');
    await expect(page.getByTestId('passage-exercises-section')).toContainText('Arabic and English; she was born in Britain');
  });

  test('sixth preparatory Euphrates River shows available source exercise while keeping missing full text explicit', async ({ page }) => {
    await page.goto('/grade/sixth-preparatory');
    await page.waitForLoadState('networkidle');
    const library = page.getByTestId('grade-book-passage-library');
    const unitEight = library.locator('[data-testid="book-passage-unit-group"][data-unit-id="8"]');
    await unitEight.getByRole('button').click();
    const euphratesCard = library.getByTestId('book-passage-card').filter({ hasText: 'The Euphrates River' });
    await expect(euphratesCard).toBeVisible();
    await euphratesCard.getByRole('button', { name: 'فتح القطعة كاملة' }).click();
    await expect(page.getByRole('heading', { name: 'النص الإنجليزي الكامل غير متاح في المصدر المرفوع' })).toBeVisible();
    await expect(page.getByTestId('passage-exercises-section')).toContainText('Exercise D — Find words in the text');
    await expect(page.getByTestId('passage-exercises-section')).toContainText('deep valleys');
    await expect(page.getByTestId('passage-exercises-section')).toContainText('gorges');
  });

  test('fifth preparatory shows the verified Harrods history and correct foundation year', async ({ page }) => {
    await page.goto('/grade/fifth-preparatory/unit/57/lesson/5th-u7-l8');
    await page.waitForLoadState('networkidle');

    await page.getByRole('button', { name: 'نص القراءة الأصلي' }).click();
    await expect(page.locator('p[lang="en"]').nth(1)).toContainText('Harrods, which was founded in 1834');
    await expect(page.locator('p[lang="en"]').last()).toContainText('Everything for Everybody Rich Everywhere');
    await expect(page.getByText('ملزمة الخامس الإعدادي 2026')).toBeVisible();
    await expect(page.getByText('نص مطابق للمصدر المرفق')).toBeVisible();
  });

  test('fifth preparatory shows the verified three-metre boa story without invented details', async ({ page }) => {
    await page.goto('/grade/fifth-preparatory/unit/58/lesson/5th-u8-l3');
    await page.waitForLoadState('networkidle');

    await page.getByRole('button', { name: 'نص القراءة الأصلي' }).click();
    await expect(page.locator('p[lang="en"]').first()).toContainText('The terrified residents of a block of flats in London');
    await expect(page.locator('p[lang="en"]').nth(2)).toContainText('James Andrews');
    await expect(page.locator('p[lang="en"]').last()).toContainText('the eighth floor of the building');
    await expect(page.getByText('نص مطابق للمصدر المرفق')).toBeVisible();
  });

  test('fifth preparatory shows the original Olympics volunteer interview as a cloze dialogue', async ({ page }) => {
    await page.goto('/grade/fifth-preparatory/unit/58/lesson/5th-u8-l4');
    await page.waitForLoadState('networkidle');

    await page.getByRole('button', { name: 'نص القراءة الأصلي' }).click();
    await expect(page.locator('p[lang="en"]').last()).toContainText('The director asked me if I had any previous experience in sports management');
    await expect(page.locator('p[lang="en"]').last()).toContainText('my __________');
    await expect(page.getByText('184–185', { exact: true })).toBeVisible();
  });

  test('fifth preparatory shows Samira’s original Ramadan email and its phrase bank', async ({ page }) => {
    await page.goto('/grade/fifth-preparatory/unit/51/lesson/5th-u1-l2');
    await page.waitForLoadState('networkidle');

    await page.getByRole('button', { name: 'نص القراءة الأصلي' }).click();
    await expect(page.locator('p[lang="en"]').first()).toContainText('To: Claire');
    await expect(page.locator('p[lang="en"]').first()).toContainText('It’s a 30-day religious fast from dawn to sunset');
    await expect(page.locator('p[lang="en"]').last()).toContainText('all through the day');
    await expect(page.getByText('نص مطابق للمصدر المرفق')).toBeVisible();
  });

  test('fifth preparatory attributes the opening line of the tennis dialogue to Zeina', async ({ page }) => {
    await page.goto('/grade/fifth-preparatory/unit/54/lesson/5th-u4-l2');
    await page.waitForLoadState('networkidle');

    await page.getByRole('button', { name: 'نص القراءة الأصلي' }).click();
    await expect(page.locator('p[lang="en"]').first()).toContainText('Zeina: Come on, Helen. I know you’re joking');
    await expect(page.locator('p[lang="en"]').first()).not.toContainText('Helen: Come on, Helen');
    await expect(page.getByText('نص مطابق للمصدر المرفق')).toBeVisible();
  });

  test('fifth preparatory Unit Four Test is not mislabeled as a reading passage or official 100-mark exam', async ({ page }) => {
    await page.goto('/grade/fifth-preparatory/unit/54/lesson/5th-u4-l4');
    await page.waitForLoadState('networkidle');

    await expect(page.getByRole('heading', { name: 'الدرس الرابع: اختبار الوحدة الرابعة (Unit Four Test)' })).toBeVisible();
    await expect(page.getByText(/مراجعة اختبار الوحدة الرابعة كما ورد في الصفحتين 102–103/).first()).toBeVisible();
    await expect(page.getByRole('button', { name: 'نص القراءة الأصلي' })).toHaveCount(0);
    await expect(page.getByText(/100 درجة كاملة/)).toHaveCount(0);
  });

  test('fifth preparatory Babylon Festival reading avoids unsupported venue capacity claims', async ({ page }) => {
    await page.goto('/grade/fifth-preparatory/unit/51/lesson/5th-u1-l8');
    await page.waitForLoadState('networkidle');

    await page.getByRole('button', { name: 'نص القراءة الأصلي' }).click();
    await expect(page.locator('p[lang="en"]').first()).toContainText('the first Festival in 1987');
    await expect(page.locator('p[lang="en"]').nth(1)).toContainText('There are three main theatres');
    await expect(page.locator('p[lang="en"]').nth(2)).toContainText('The Babylonian Theatre is the biggest amphitheatre');
    await expect(page.getByText('2,500 spectators')).toHaveCount(0);
    await expect(page.getByText('نص مطابق للمصدر المرفق')).toBeVisible();
  });

  test('fifth preparatory digital poverty reading sticks to the Justin letter and source article', async ({ page }) => {
    await page.goto('/grade/fifth-preparatory/unit/52/lesson/5th-u2-l3');
    await page.waitForLoadState('networkidle');

    await page.getByRole('button', { name: 'نص القراءة الأصلي' }).click();
    await expect(page.locator('p[lang="en"]').first()).toContainText('I own a computer repair shop');
    await expect(page.locator('p[lang="en"]').last()).toContainText('With only lessons online');
    await expect(page.locator('p[lang="en"]').last()).toContainText('these students need help urgently');
    await expect(page.getByText('نص مطابق للمصدر المرفق')).toBeVisible();
  });

  test('fifth preparatory internet reading follows the printed 1990 and 1993 dates', async ({ page }) => {
    await page.goto('/grade/fifth-preparatory/unit/52/lesson/5th-u2-l6');
    await page.waitForLoadState('networkidle');

    await page.getByRole('button', { name: 'نص القراءة الأصلي' }).click();
    await expect(page.locator('p[lang="en"]').nth(1)).toContainText('It was invented in 1990');
    await expect(page.locator('p[lang="en"]').nth(1)).toContainText('In 1993, the internet became public');
    await expect(page.getByText('نص مطابق للمصدر المرفق')).toBeVisible();
  });

  test('fifth preparatory mobile phone history is labeled reconstructed and has no invented archaeologist story', async ({ page }) => {
    await page.goto('/grade/fifth-preparatory/unit/52/lesson/5th-u2-l8');
    await page.waitForLoadState('networkidle');

    await page.getByRole('button', { name: 'نص القراءة الأصلي' }).click();
    await expect(page.getByText('نص معاد بناؤه — يحتاج مراجعة')).toBeVisible();
    await expect(page.locator('p[lang="en"]').first()).toContainText('The first mobile phone was used by the Swedish police in 1946');
    await expect(page.locator('p[lang="en"]').first()).toContainText('After six calls, the car battery was flat');
    await expect(page.getByText(/عالم الآثار|Aloalo|40 كيلوغراماً/)).toHaveCount(0);
  });


  test('third intermediate Iraqi Morning News opens with the complete bilingual source text and Activity Book answers', async ({ page }) => {
    await page.goto('/grade/third-intermediate/passages');
    await page.waitForLoadState('networkidle');

    const library = page.getByTestId('grade-book-passage-library');
    const unitFive = library.locator('[data-testid="book-passage-unit-group"][data-unit-id="105"]');
    await unitFive.getByRole('button').click();

    const newsCard = library.getByTestId('book-passage-card').filter({ hasText: 'Iraqi Morning News' });
    await expect(newsCard).toBeVisible();
    await newsCard.getByRole('button', { name: 'فتح القطعة كاملة' }).click();

    await expect(page.getByTestId('reading-passage-dossier')).toBeVisible();
    await expect(page.getByTestId('original-passage-section')).toContainText('Minister of Education in London');
    await expect(page.getByTestId('original-passage-section')).toContainText('John Smith, 13');
    await expect(page.getByTestId('passage-translation-section')).toContainText('افتتح وزير الرياضة مدينة رياضية جديدة في البصرة');
    await expect(page.getByTestId('passage-exercises-section')).toContainText('What was Salma (do / doing) before the dog ran at her?');
    await expect(page.getByTestId('passage-exercises-section')).toContainText('were waiting');
  });

  test('fourth preparatory Exercise and Fitness passage does not invent missing Activity Book questions', async ({ page }) => {
    await page.goto('/grade/fourth-preparatory/passages');
    await page.waitForLoadState('networkidle');

    const library = page.getByTestId('grade-book-passage-library');
    const unitSix = library.locator('[data-testid="book-passage-unit-group"][data-unit-id="46"]');
    await unitSix.getByRole('button').click();
    const exerciseCard = library.getByTestId('book-passage-card').filter({ hasText: 'Exercise & Fitness' });
    await expect(exerciseCard).toBeVisible();
    await exerciseCard.getByRole('button', { name: 'فتح القطعة كاملة' }).click();

    await expect(page.getByTestId('original-passage-section')).toContainText('If you want to be fit and healthy, you need to take regular exercise.');
    await expect(page.getByTestId('passage-translation-section')).toContainText('إذا أردت أن تكون لائقًا وبصحة جيدة');
    await expect(page.getByTestId('passage-exercises-section')).toContainText('أسئلة كتاب النشاط أو الملزمة وإجاباتها لم تُربط بهذه القطعة بعد');
    await expect(page.getByTestId('passage-exercises-section')).not.toContainText('Mahmoud is fearless');
  });

  test('fourth preparatory body exercise and refinery passages display source-matched questions', async ({ page }) => {
    await page.goto('/grade/fourth-preparatory');
    await page.waitForLoadState('networkidle');

    const library = page.getByTestId('grade-book-passage-library');
    const unitSeven = library.locator('[data-testid="book-passage-unit-group"][data-unit-id="47"]');
    await unitSeven.getByRole('button').click();

    const bodyCard = library.getByTestId('book-passage-card').filter({ hasText: 'Why Exercise Is Important for Your Body' });
    await expect(bodyCard).toBeVisible();
    await bodyCard.getByRole('button', { name: 'فتح القطعة كاملة' }).click();
    await expect(page.getByTestId('original-passage-section')).toContainText('Exercise is important for your body in many ways.');
    await expect(page.getByTestId('passage-exercises-section')).toContainText('Why do you need strong muscles?');
    await expect(page.getByTestId('passage-exercises-section')).toContainText('Heart disease kills many people in developed countries.');

    await page.goto('/grade/fourth-preparatory');
    await page.waitForLoadState('networkidle');
    const oilLibrary = page.getByTestId('grade-book-passage-library');
    const oilUnit = oilLibrary.locator('[data-testid="book-passage-unit-group"][data-unit-id="47"]');
    await oilUnit.getByRole('button').click();
    const oilCard = oilLibrary.getByTestId('book-passage-card').filter({ hasText: 'From the Earth to the Refinery' });
    await expect(oilCard).toBeVisible();
    await oilCard.getByRole('button', { name: 'فتح القطعة كاملة' }).click();
    await expect(page.getByTestId('original-passage-section')).toContainText('Petroleum was formed millions of years ago.');
    await expect(page.getByTestId('passage-exercises-section')).toContainText('Petroleum has (   )');
    await expect(page.getByTestId('passage-exercises-section')).toContainText('been used since the 19th century.');
  });

  test('fourth preparatory space fitness dossier uses the verified interview and Activity Book answer key', async ({ page }) => {
    await page.goto('/grade/fourth-preparatory');
    await page.waitForLoadState('networkidle');

    const library = page.getByTestId('grade-book-passage-library');
    const unitEight = library.locator('[data-testid="book-passage-unit-group"][data-unit-id="48"]');
    await unitEight.getByRole('button').click();
    const card = library.getByTestId('book-passage-card').filter({ hasText: 'Keeping Fit in Space' });
    await expect(card).toBeVisible();
    await card.getByRole('button', { name: 'فتح القطعة كاملة' }).click();

    await expect(page.getByTestId('original-passage-section')).toContainText('Our guest on today’s program is an astronaut.');
    await expect(page.getByTestId('original-passage-section')).toContainText('two-and-a-half hours exercising every day');
    await expect(page.getByTestId('passage-translation-section')).toContainText('ضيف برنامجنا اليوم رائد فضاء');
    await expect(page.getByTestId('passage-exercises-section')).toContainText('Read the interview on Student’s Book page 85.');
    await expect(page.getByTestId('passage-exercises-section')).toContainText('1, 3 and 6.');
  });
});
