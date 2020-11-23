<template>
    <footer>
        <div v-if="('./job.vue')" class="contacts contacts-footer">
            <div class="tel contacts-footer-inner">+7 988 668-14-88</div>
            <div class="email-cont contacts-footer-inner">
                <a class="link-email link-underline-solid" href="mailto:mail@kontora.cc">mail@kontora.cc</a>
            </div>
        </div>

        <div v-if="('./job.vue')" class="social-links-footer">
            <div class="social-link-wrapper">
                <a class="social-link link-underline-solid" href="https://t.me/kontoragram">Telegram</a>
            </div>
            <div class="social-link-wrapper">
                <a class="social-link link-underline-solid" href="https://wa.me/79886681488">WhatsApp</a>
            </div>
            <div class="social-link-wrapper">
                <a class="social-link link-underline-solid" href="https://kontoragram">Instagram</a>
            </div>
        </div>

        <div class="vacancies-partnership-cont-footer">
            <div class="vacancies-partnership-link-wrapper">
                <NuxtLink to="/job" class="vacancies-partnership-link link-underline-solid">Вакансии</NuxtLink>
            </div>
            <div class="vacancies-partnership-link-wrapper">
                <NuxtLink to="/partnership" class="vacancies-partnership-link link-underline-solid">Партнёрка</NuxtLink>
            </div>
        </div>

        <div class="copyright">©&nbsp;2017- 2021</div>
    </footer>
</template>



<script>
export default {
  name: 'Footer',
}
</script>



<style scoped>
footer {
    color: var(--Gray100);
    margin-top: 6rem;
    padding: 3.2rem 2.8rem 2.4rem 18%;
}

footer a {
    color: var(--Gray100);
}
footer a:hover {
    color: var(--Black100);
}

footer div {
    display: inline-block;
}

footer>div:not(:first-child) {
    margin-left: 8rem;
}

.contacts-footer-inner:not(:last-child),
.social-links-footer>.social-link-wrapper:not(:last-child),
.vacancies-partnership-link-wrapper:not(:last-child) {
    margin-right: 3.2rem;
}

.copyright {
    float: right;
}


@media (min-width: 1340px) {}



@media (max-width: 460px) {}
</style>
