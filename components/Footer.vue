<template>
    <footer>
        <div class="section-inner">
            <div v-if="$route.path!=='/' && $route.path!==''" class="contacts contacts-footer">
                <div class="email-cont contacts-footer-inner">
                    <a class="link-email link-underline-solid" href="mailto:mail@prostokontora.ru">mail@prostokontora.ru</a>
                </div>
                <div class="tel contacts-footer-inner"><a href="tel:+79886681488">+7 988 668-14-88</a></div>
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
                <div v-show="false" class="vacancies-partnership-link-wrapper">
                    <NuxtLink to="/partnership" class="vacancies-partnership-link link-underline-solid">Партнёрка</NuxtLink>
                </div>
                <div class="vacancies-partnership-link-wrapper">
                    <NuxtLink to="/details" class="vacancies-partnership-link link-underline-solid">Реквизиты</NuxtLink>
                </div>
            </div>

            <div class="copyright">©&nbsp;2018&thinsp;–&thinsp;2022</div>
        </div>
    </footer>
</template>



<script>
export default {
  name: 'Footer',
}
</script>



<style scoped>
footer {
    color: var(--Black32);
    margin: 6rem auto 2.4rem;
    max-width: 1600px;
}

footer>.section-inner {
    display: grid;
    justify-content: space-between;
}

footer a {
    color: var(--Black32);
    border-bottom-color: var(--Black16);
}
footer a:hover {
    color: var(--Black100);
    border-bottom-color: var(--Black100);
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
    cursor: default;
    float: right;
}


@media (min-width: 1340px) {

}



@media (max-width: 500px) {
    footer {
        margin: 0 0 9.2rem;
    }

    footer>.section-inner {
        display: grid;
        grid-column-gap: .4rem;
        justify-content: space-between;
    }

    footer>.section-inner>div {
        width: fit-content;
    }

    footer>.section-inner>div:not(:first-child) {
        margin-left: 0;
    }

    footer>.section-inner>.contacts-footer {
        align-content: space-between;
        grid-column: 3/4;
        grid-row: 1/3;
        margin-bottom: 1.6rem;
        flex-direction: column-reverse;
        text-align: right;
        width: 14.4rem;
    }

    .contacts-footer-inner:not(:last-child) {
        margin-right: 0;
    }

    .contacts-footer-inner:first-child {
        margin-bottom: 1.6rem;
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
        display: flex;
        margin-bottom: 1.6rem;
        margin-right: 0;
    }

    .copyright {
        grid-column: 3/4;
        grid-row: 3/4;
        justify-self: flex-end;
    }
}
</style>
