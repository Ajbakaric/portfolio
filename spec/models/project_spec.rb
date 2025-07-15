require 'rails_helper'

RSpec.describe Project, type: :model do
  it "is valid with valid attributes" do
    project = Project.new(title: "Test Project", description: "Test description", link: "http://example.com")
    expect(project).to be_valid
  end

  it "is not valid without a title" do
    project = Project.new(description: "No title", link: "http://example.com")
    expect(project).to_not be_valid
  end
end
