import { shallowMount } from "@vue/test-utils";

import App from "./App.vue";

describe("App", () => {
  it("renders title", () => {
    const wrapper = shallowMount(App);

    expect(wrapper.find("h1").text()).toMatch("Todo App");
  });

  it("renders label, input", () => {
    const wrapper = shallowMount(App);

    // '할 일 작성'이라는 텍스트가 화면에 출력됩니다.
    expect(wrapper.find("label").text()).toMatch("할 일 작성");

    // 할 일을 작성할 수 있는 'control'창 이 화면에 출력됩니다.
    expect(wrapper.find("input").attributes("placeholder")).toMatch(
      "할 일을 작성해주세요"
    );
  });

  it("renders button", () => {
    const wrapper = shallowMount(App);

    // '추가하기'라는 버튼이 화면에 출력됩니다.
    expect(wrapper.find("button").text()).toMatch("추가하기");
  });

  it("connects label and input", () => {
    const wrapper = shallowMount(App);
    const TODO_CONTROL = "todo-control";

    expect(wrapper.find("label").attributes("for")).toMatch(TODO_CONTROL);
    expect(wrapper.find("input").attributes("id")).toMatch(TODO_CONTROL);
  });

  it("changes input value when listens input event", async () => {
    const wrapper = shallowMount(App);

    // setValue는 아래 두 코드의 축약 api 입니다.
    await wrapper.find("input").setValue("아무것도 안하기");
    // wrapper.find("input").element.value = "아무것도 안하기";
    // wrapper.find("input").trigger("input");

    expect(wrapper.vm.text).toMatch("아무것도 안하기");
  });

  it("adds todo when listens '추가하기' click event", async () => {
    const wrapper = shallowMount(App);

    wrapper.find("input").setValue("아무것도 안하기");
    await wrapper.find("button").trigger("click");

    expect(wrapper.find("li").text()).toContain("아무것도 안하기");
  });
});
