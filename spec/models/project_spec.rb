require 'rails_helper'

RSpec.describe Project, type: :model do
  it "is valid with valid attributes" do
    project = Project.new(title: "Test", description: "A test project", link: "http://example.com")
    expect(project).to be_valid
  end

  it "is not valid without a title" do
    project = Project.new(title: nil, description: "No title", link: "http://example.com")
    expect(project).not_to be_valid
  end

  it "is not valid without a description" do
    project = Project.new(title: "Test", description: nil, link: "http://example.com")
    expect(project).not_to be_valid
  end

  it "is not valid without a link" do
    project = Project.new(title: "Test", description: "A test project", link: nil)
    expect(project).not_to be_valid
  end
end
