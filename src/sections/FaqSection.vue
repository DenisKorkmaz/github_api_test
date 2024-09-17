<script setup>
import { ref } from 'vue';

// Verwende 'const' anstelle von 'let' für 'isOpen', da es nicht neu zugewiesen wird.
const isOpen = ref(1);

// Exportiere das 'faqs'-Array nicht direkt, da es hier im Setup-Skript verwendet wird.
// Verwende stattdessen einfach eine normale Variable.
const faqs = [
  {
    id: 1,
    title: 'What is bookmark?',
    description:
      'A bookmark is a feature that allows users to save the URL of a webpage for quick access later. It acts as a shortcut to the webpage, allowing you to navigate back to it without having to remember or search for the URL. Bookmarks are handy for keeping track of your favorite websites, important articles, or resources that you frequently visit. They help you organize your online content and improve your browsing experience.',
  },
  {
    id: 2,
    title: 'How can I request a new browser?',
    description:
      "To request a new browser, you can visit our official website and navigate to the 'Feedback' or 'Contact Us' section. There, you can submit your request for a new browser version or feature. Additionally, you can participate in our community forums or reach out to our support team with your suggestions. We value user feedback and use it to enhance our products, so your input is essential in shaping the future of our browser.",
  },
  {
    id: 3,
    title: 'Is there a mobile app available?',
    description:
      'Yes, we offer a mobile app for both Android and iOS platforms. You can download our mobile app from the respective app stores (Google Play Store for Android and the App Store for iOS). The mobile app allows you to sync your bookmarks, browsing history, and other settings across all your devices. You can access your bookmarks on the go, and it provides a seamless browsing experience across your mobile and desktop devices.',
  },
  {
    id: 4,
    title: 'What about other Chromium browsers?',
    description:
      'Our bookmarking feature is compatible with various Chromium-based browsers, including popular ones like Google Chrome, Microsoft Edge, Brave, Vivaldi, and others. As long as you are using a version of these browsers that is 62 or higher, you can enjoy the benefits of our bookmarking tool. The integration is seamless and allows you to manage your bookmarks efficiently, regardless of the Chromium browser you prefer.',
  },
];

// Kein 'export default' notwendig, da 'faqs' hier verwendet wird.
</script>


<template>
    <!-- Questions Section Start -->
    <div id="faq" class="container mx-auto px-5 md:w-4/5">
        <section class="py-16 pt-18">
            <div class="w-4/5 md:w-3/5 mx-auto">
                <h2 class="text-3xl md:text-4xl font-theme-heading font-medium text-center">Frequently Asked Questions</h2>
                <p class="text-theme-grayish-blue text-center mt-7 font-theme-content text-lg">Here are some of out FAQs. If you have any other quesitons you'd like answered please feel free to email us.</p>
            </div>

            <div class="mt-10 w-full lg:w-3/5 mx-auto">
                <ul class="shadow-lg">
                    <template v-for="(faq, index) in faqs" :key="faq.id">
                        <li @click="isOpen = faq.id" :class="isOpen === faq.id ? 'text-theme-secondary' : ''" class="font-theme-content font-medium text-xl cursor-pointer hover:text-theme-secondary py-5 flex justify-between items-center transition duration-200 bg-slate-100 px-6">
                            <a href="#">{{ faq.title }}</a>
                            <svg :class="isOpen === faq.id ? 'rotate-180 text-theme-secondary' : 'rotate-0 text-theme-primary'" class="transform" xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="currentColor" stroke-width="3" d="M1 1l8 8 8-8" /></svg>
                        </li>
                        <p v-show="isOpen === faq.id" class="bg-slate-50 px-6 font-theme-content text-md lg:text-lg py-5 text-gray-500 text-justify">{{ faq.description }}</p>
                    </template>
                </ul>
                <div class="flex justify-center mt-10">
                    <LinkButton btn-type="primary" link="#" class="text-sm">More FAQs</LinkButton>
                </div>
            </div>
        </section>
    </div>
    <!-- Questions Section End -->
</template>
