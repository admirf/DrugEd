using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices.WindowsRuntime;
using Windows.Foundation;
using Windows.Foundation.Collections;
using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;
using Windows.UI.Xaml.Controls.Primitives;
using Windows.UI.Xaml.Data;
using Windows.UI.Xaml.Input;
using Windows.UI.Xaml.Media;
using Windows.UI.Xaml.Navigation;
using System.Net.Http;
using Newtonsoft.Json;
using System.Text;
using DrugEd.Models;

// The Blank Page item template is documented at http://go.microsoft.com/fwlink/?LinkId=234238

namespace DrugEd
{
    /// <summary>
    /// An empty page that can be used on its own or navigated to within a Frame.
    /// </summary>
    public sealed partial class StoryPage : Page
    {

        private string StringifyStoryID(string id)
        {
            return "{\"_id\":\"" + id + "\"}";
        }

        private string StringifyRating(string id, string val)
        {
            return "{\"_id\": \"" + id + "\", \"value\": " + val + "}";
        }

        Utility.StoryPageNavigate mod;
        private Story story;
        public Story StoryProperty { get { return story; } }

        public StoryPage()
        {
            this.DataContext = this;
            this.InitializeComponent();
        }

        protected override void OnNavigatedTo(NavigationEventArgs e)
        {
            mod = e.Parameter as Utility.StoryPageNavigate;
            var id = mod._id;

            using(var client = new HttpClient())
            {
                client.BaseAddress = new Uri(Utility.HOST);
                var result = client.PostAsync("/story", new StringContent(
                    StringifyStoryID(id),
                    Encoding.UTF8,
                    "application/json"
                    )).Result.Content.ReadAsStringAsync().Result;

                story = JsonConvert.DeserializeObject<Story>(result);

                // msg.Text = result;
            }

            base.OnNavigatedTo(e);
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            if (mod.All)
            {
                Frame.Navigate(typeof(StoriesPage), new Utility.StoryNavigate("", mod.Category, true));
            }
            else
            {
                Frame.Navigate(typeof(StoriesPage), new Utility.StoryNavigate(mod.Drug, mod.Category, false));
            }
        }

        private void Button_Click_1(object sender, RoutedEventArgs e)
        {
            var selected = rating.SelectedItem as ComboBoxItem;
            
            if(selected != null)
            {
                var value = selected.Content.ToString();
                using (var client = new HttpClient())
                {
                    client.BaseAddress = new Uri(Utility.HOST);
                    var result = client.PostAsync("/rate", new StringContent(
                        StringifyRating(story._id, value),
                        Encoding.UTF8,
                        "application/json"
                        )).Result;
                }
            }
        }
    }
}
