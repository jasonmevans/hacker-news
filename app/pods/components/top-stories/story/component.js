import Component from "@ember/component";
import { computed } from "@ember/object";

export default class TopStoriesStory extends Component {
  // component args
  id = null;

  // state
  loaded = false;

  storyData = {
    time: 0
  };

  async init() {
    super.init();

    this.set(
      "storyData",
      await window
        .fetch(
          `https://hacker-news.firebaseio.com/v0/item/${this.id}.json?print=pretty`
        )
        .then(async response => {
          return response.json();
        })
    );
    this.set("loaded", true);
  }

  @computed("storyData.date")
  get date() {
    return new Date(this.storyData.time).toLocaleString();
  }
}
