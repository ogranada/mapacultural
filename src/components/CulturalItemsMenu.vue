<template>
  <div class="CulturalItemsMenu">
    <ul class="CulturalItemsMenu-items">
      <li
        class="CulturalItemsMenu-item"
        v-for="(value, key) in getValidItems"
        :key="key"
        :class="{isExpanded:isExpanded(key)}"
        @click="toggleExpanded(key)"
        >
        <div class="CulturalItemsMenu-itemContainer">
          <img 
            class="CulturalItemsMenu-icon"
            @click="toggleExpanded(key)"
            :src="getIcon(key)"
            :alt="key">
          <span
            @click="toggleExpanded(key)"
            >
            {{key}}
          </span>
        </div>
        <div>
          <ul class="CulturalItemsMenu-submenu">
            <li v-for="(subvalue, subkey) in value" :key="subkey">
              {{subkey}}
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import interact from "interactjs";
import {toTitleCase} from "../utils.js";

export default {
  name: "CulturalItemsMenu",
  props: ["items", "icons"],
  data: () => ({
    expandedItems: {}
  }),
  mounted() {
    window.console.log(this.items);
    this.prepareDragAndDrop();
  },
  computed: {
    getValidItems() {
      return Object.keys(this.items)
        .filter(item => item.indexOf("__") === -1)
        .reduce((acc, item) => {
          acc[item] = this.items[item];
          return acc;
        }, {});
    }
  },
  methods: {
    getIcon(elm) {
      return this.icons[toTitleCase(elm)];
    },
    toggleExpanded(value){
      const expandedItems = {...this.expandedItems};
      expandedItems[value] = !expandedItems[value];
      this.$set(this, 'expandedItems', expandedItems);
    },
    isExpanded(value) {
      return this.expandedItems[value];
    },
    prepareDragAndDrop() {
      interact(".CulturalItemsMenu").draggable({
        // enable inertial throwing
        inertia: true,
        // keep the element within the area of it's parent
        /*
      restrict: {
        restriction: "parent",
        endOnly: true,
        elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
      },
      */
        // enable autoScroll
        autoScroll: true,

        // call this function on every dragmove event
        onmove: this.dragMoveListener,
        // call this function on every dragend event
        onend: function(evt) {
          var textEl = evt.target.querySelector("p");

          textEl &&
            (textEl.textContent =
              "moved a distance of " +
              Math.sqrt(
                (Math.pow(evt.pageX - evt.x0, 2) +
                  Math.pow(evt.pageY - evt.y0, 2)) |
                  0
              ).toFixed(2) +
              "px");
        }
      });
    },
    dragMoveListener(evt) {
      var target = evt.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute("data-x")) || 0) + evt.dx,
        y = (parseFloat(target.getAttribute("data-y")) || 0) + evt.dy;

      // translate the element
      target.style.webkitTransform = target.style.transform =
        "translate(" + x + "px, " + y + "px)";

      // update the posiion attributes
      target.setAttribute("data-x", x);
      target.setAttribute("data-y", y);
    }
  }
};
</script>

<style lang="scss">
.CulturalItemsMenu {
  position: absolute;
  top: 1em;
  right: 1em;
  z-index: 1000;
  background-color: rgba(90, 90, 90, 0.3);
  padding: 0.5em;
  border-radius: 2px;

  &-items {
    padding: 0.5em 1em;
    margin: 0;
    list-style: none;
  }

  &-itemContainer {
    display: flex;
    align-items: center;
  }

  &-item {
    margin: 0;
    padding: 0 1.5em 0 0;
    position: relative;
    min-height: 3em;
    line-height: 3em;

    &::before {
      content: '';
      position: absolute;
      margin: 0;
      padding: 0;
      border-top: 4px solid black;
      border-left: 4px solid black;
      border-bottom: 4px solid transparent;
      border-right: 4px solid transparent;
      right: 0;
      top: 20px;
      transform-origin: 4px 2px;
      transform: rotateZ(45deg) translateY(-50%);
      transition: all 0.5s ease-in-out;
    }

    &.isExpanded::before {
      transform: rotateZ(225deg) translateY(-50%);
    }
    &.isExpanded {
      .CulturalItemsMenu-submenu {
        max-height: 100%;
        overflow: scroll;
      }
    }
  }

  &-icon {
    width: 1em;
    height: 1.5em;
    margin-right: 1em; 
  }

  &-submenu {
    max-height: 0;
    overflow: hidden;
  }

}
</style>

