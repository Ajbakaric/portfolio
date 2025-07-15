require 'rails_helper'

RSpec.describe "Projects API", type: :request do
  it "returns HTTP success" do
    get '/projects'
    expect(response).to have_http_status(:success)
  end

  it "returns JSON array of projects (manual creation)" do
    Project.create!(title: "BanterBox", description: "Chat app", link: "https://banterbox.example.com")
    Project.create!(title: "WeatherNow", description: "Weather app", link: "https://weathernow.example.com")

    get '/projects'
    json = JSON.parse(response.body)

    expect(json).to be_an(Array)
    expect(json.size).to eq(2)
    expect(json.map { |p| p["title"] }).to include("BanterBox", "WeatherNow")
  end

  it "returns projects using factory" do
    create_list(:project, 3)

    get '/projects'
    json = JSON.parse(response.body)

    expect(json).to be_an(Array)
    expect(json.size).to eq(3)
  end
end
