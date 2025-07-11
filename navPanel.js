class NavPanel extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="nav-menu">
            <a href="index.html"><i class="fa-solid fa-house active" id="home"></i></a>
            <a href="https://gvnx.is-a-good.dev/yt-main"><i class="fa-brands fa-youtube" id="youtube"></i></a>
            <a href="https://gvnx.is-a-good.dev/twitch"><i class="fa-brands fa-twitch" id="twitch"></i></a>
            <a href="https://discord.gg/qNVJeAyFPv"><i class="fa-brands fa-discord" id="discord"></i></a>
            <a href="https://gvnx.is-a-good.dev/patreon"><i class="fa-brands fa-patreon" id="patreon"></i></a>
            <a href="https://streamlabs.com/simplygav/tip"><i class="fa-solid fa-dollar-sign" id="money"></i></a>
        </div>
      `;
    }
}

customElements.define('nav-panel', NavPanel);