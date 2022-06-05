<template>
    <footer>
        <div v-if="$route.path!=='/' && $route.path!==''" class="contacts contacts-footer">
            <div class="tel contacts-footer-inner"><a href="tel:+79886681488">+7 988 668-14-88</a></div>
            <div class="email-cont contacts-footer-inner">
                <a class="link-email link-underline-solid" href="mailto:mail@prostokontora.ru">mail@prostokontora.ru</a>
            </div>
        </div>

        <div v-if="$route.path!=='/' && $route.path!==''" class="social-links-footer">
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
            <div class="vacancies-partnership-link-wrapper">
                <NuxtLink to="/details" class="vacancies-partnership-link link-underline-solid">Реквизиты</NuxtLink>
            </div>
        </div>

        <div class="copyright">©&nbsp;2018&hairsp;—&hairsp;2022</div>
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
    display: grid;
    justify-content: space-between;
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
    grid-row: 1/2;
}

/*footer>div:not(.vacancies-partnership-cont-footer) {
    margin-left: 6rem;
}*/

.vacancies-partnership-cont-footer {
    grid-column: 1/2;
}

.contacts-footer {
    grid-column: 3/4;
}

.social-links-footer {
    grid-column: 2/3;
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



@media (max-width: 460px) {
    footer {
        display: grid;
        grid-column-gap: .4rem;
        justify-content: space-between;
        margin: 0 .8rem;
        padding: 0 0 2rem;
        width: calc(100vw - 1.6rem);
    }

    footer>div {
        display: flex;
        flex-direction: column;
        width: fit-content;
    }

    footer>div:not(:first-child) {
        margin-left: 0;
    }

    .contacts-footer {
        align-content: space-between;
        grid-column: 3/4;
        grid-row: 1/2;
        margin-bottom: 1.2rem;
        flex-direction: column-reverse;
        text-align: right;
    }

    .contacts-footer-inner:not(:last-child) {
        margin-right: 0;
    }

    .contacts-footer-inner:first-child {
        margin-top: 1.2rem;
    }

    .social-links-footer {
        align-content: space-between;
        grid-row: 1/4;
        grid-column: 2/3;
    }

    .vacancies-partnership-cont-footer {
        align-content: space-between;
        grid-row: 1/4;
        grid-column: 1/2;
    }

    .social-links-footer>.social-link-wrapper:not(:last-child),
    .vacancies-partnership-link-wrapper:not(:last-child) {
        margin-bottom: 1.2rem;
        margin-right: 0;
    }

    .copyright {
        grid-column: 3/4;
        justify-self: flex-end;
    }
}
</style>
