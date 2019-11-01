import Component from "@ember/component";
import { computed } from "@ember/object";

export default class TopStories extends Component {
  // component args
  maxStories = 25;

  // state
  stories = [];

  @computed("stories")
  get maxStoryList() {
    return this.stories.slice(0, this.maxStories);
  }

  async init() {
    super.init();

    this.set(
      "stories",
      await window
        .fetch(
          "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
        )
        .then(async response => {
          return response.json();
        })
    );
  }
}
