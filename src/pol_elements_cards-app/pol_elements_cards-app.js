import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

import {} from '@polymer/polymer/lib/elements/dom-repeat.js';

import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/iron-ajax/iron-ajax.js';



/**
 * @customElement
 * @polymer
 */
class Pol_elements_cardsApp extends PolymerElement {
  static get template() {
    return html`
    <style>


    app-header {
      color: #fff;
      background-color: #00AA8D;
    }
    app-toolbar {
      height: 120px;
    }
    [condensed-title] {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-image: url('//app-layout-assets.appspot.com/assets/pesto/logo_m.png');
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 90px;
      /* The difference in font size is used to calculate the scale of the title in the transition. */
      font-size: 16px;
    }
    [main-title] {
      position: absolute;
      top: -120px;
      bottom: 0;
      left: 0;
      right: 0;
      background-image: url('//app-layout-assets.appspot.com/assets/pesto/logo_l.png');
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 240px;
      -webkit-transform-origin: center top !important;
      transform-origin: center top !important;
      /* The difference in font size is used to calculate the scale of the title in the transition. */
      font-size: 32px;
    }
  .content {
      display: block;
      position: relative;
      max-width: 1000px;
      margin: 5px auto;
    }
  .card-container {
      display: inline-block;
      width: 33.33%;
      color: black;
      text-decoration: none;
    }
    paper-card {
      display: block;
      margin: 5px;
      --paper-card-header-image: {
        height: 200px;
      }
    }
    paper-card h2 {
      margin: 4px;
      font-weight: normal;
    }
    paper-card p {
      margin: 4px;
      color: #999;
    }
    paper-fab {
      position: fixed;
      right: 24px;
      bottom: 24px;
      --paper-fab-background: #EF5458;
      --paper-fab-keyboard-focus-background: #DF4448;
    }

    @media (max-width: 960px) {
    .content {
        max-width: 800px;
      }
    .card-container {
        width: 50%;
      }
    }

    @media (max-width: 719px) {
      app-toolbar {
        height: 60px;
      }
      [condensed-title] {
        background-image: url('//app-layout-assets.appspot.com/assets/pesto/logo_s.png');
        background-size: 60px;
      }
      [main-title] {
        top: -60px;
        background-image: url('//app-layout-assets.appspot.com/assets/pesto/logo_m.png');
        background-size: 90px;
      }
    .content {
        max-width: 400px;
      }
    .card-container {
        width: 100%;
      }
    }

    </style>

    <iron-ajax
     auto
     id="ajax"
     url="http://localhost:3000/recipes"
     last-response="{{recipes}}"
     loading="{{cargando}}">
    </iron-ajax>


    <app-drawer-layout responsive-width="1280px">

      <!-- main panel -->
    <app-header-layout>
    <app-header effects="resize-title" condenses="" fixed="" shadow="" slot="header">

        <app-toolbar class="top-toolbar">

        <slot name="drawer-toggle"></slot>

        <div condensed-title=""></div>
        </app-toolbar>
        <app-toolbar class="bottom-toolbar">

        <div main-title=""></div>
        </app-toolbar>

    </app-header>

     <div class="content">

        <dom-repeat items="{{recipes}}">
        <template>
          <a href="#/detail/{{item.id}}" class="card-container">
          <paper-card image="{{item.imageUrl}}">
              <div class="card-content">
              <h2>{{item.name}}</h2>
              <p>By <span>{{item.author}}</span></p>
              </div>
          </paper-card>
          </a>
        </template>
        </dom-repeat>

     </div>
  </app-header-layout>

  </app-drawer-layout>
    `;
  }


  static get properties() {
    return {
      cargando: Boolean,
      recipes: Object
    };
  }
}

window.customElements.define('pol_elements_cards-app', Pol_elements_cardsApp);
