import Component from "@ember/component";

export default class TopStories extends Component {
  // component args
  maxStories = 25;

  // state
  stories = [];

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
