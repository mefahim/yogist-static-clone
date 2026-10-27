# Yogist — স্ট্যাটিক HTML ক্লোন

এই ফোল্ডারে রেফারেন্স Yogist সাইটের ১৩টি আলাদা HTML পেজ, shared stylesheet/script, স্থানীয় image/font assets এবং পেজভিত্তিক audit আছে। `index.html` দিয়ে শুরু করুন; সব পেজের internal navigation স্থানীয় HTML ফাইলে যায়।

## পেজসমূহ

- `index.html` — Home
- `about-us.html` — About Us
- `class.html` — Yoga Class তালিকা
- `class-detail.html` — Vinyasa Yoga বিস্তারিত
- `faq.html` — FAQ
- `trainer.html` — Trainer directory
- `blog.html` — Blogs & News archive
- `contact-us.html` — Contact Us
- `article-yoga-mats.html` — Yoga mats article
- `article-international-yoga-day.html` — International Yoga Day article
- `article-japanese-breathing.html` — Japanese breathing article
- `article-youtube-teachers.html` — YouTube teachers article
- `article-stress-awareness.html` — Stress Awareness article

## চালানো

`index.html` সরাসরি browser-এ খোলা যায়। অথবা এই ফোল্ডারে terminal খুলে চালান:

```bash
python3 -m http.server 8765
```

তারপর `http://localhost:8765/` খুলুন। পেজের style, JavaScript, fonts এবং images local path থেকে লোড হয়।

## পরীক্ষা ও সীমাবদ্ধতা

Playwright দিয়ে ১৩টি পেজকে desktop (1280×900), tablet (768×1024) এবং mobile (390×844)—মোট ৩৯টি route/viewport-এ পরীক্ষা করেছি। পরীক্ষায় HTTP 200, কোনো local broken image, horizontal overflow বা JavaScript page error পাওয়া যায়নি। Menu, contact form submit feedback এবং gallery lightbox-এর খোলা/বন্ধ হওয়ার smoke test-ও পাস করেছে। ফলাফল `qa-evidence/results.json`-এ আছে।

Contact, newsletter ও comment form কেবল browser validation এবং local demo confirmation দেখায়—কোনো তথ্য পাঠায় বা সংরক্ষণ করে না। Map Google Maps embed, আর video link YouTube-এ যায়; এগুলোর জন্য internet প্রয়োজন। Reference-এর উপলব্ধ public page ও image পর্যবেক্ষণ করে নকশা পুনর্নির্মাণ করা হয়েছে; ১০০০% pixel-identical হওয়ার নিশ্চয়তা দেওয়া সম্ভব নয়। Article body-তে reference-এর placeholder-ধাঁচের লেখা ও দেখা “The Largest Nursing Care” heading রাখা হয়েছে।

`build_site.py` হলো ১৩টি পেজ তৈরির generator। `audit.md`-এ source-page inventory, visual system, route/section notes, evidence এবং সীমাবদ্ধতা আছে।