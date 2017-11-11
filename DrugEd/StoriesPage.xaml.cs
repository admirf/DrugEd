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
using DrugEd.Models;
using System.Net.Http;
using Newtonsoft.Json;
using System.Text;

// The Blank Page item template is documented at http://go.microsoft.com/fwlink/?LinkId=234238

namespace DrugEd
{
    /// <summary>
    /// An empty page that can be used on its own or navigated to within a Frame.
    /// </summary>
    public sealed partial class StoriesPage : Page
    {
        private Story[] stories;
        private Utility.StoryNavigate mod;
        private string DrugStringify(string drug)
        {
            string result = "{\"drug\": \"" + drug + "\"}";
            return result;
        }

        public StoriesPage()
        {
            this.InitializeComponent();
        }

        protected override void OnNavigatedTo(NavigationEventArgs e)
        {
            mod = e.Parameter as Utility.StoryNavigate;
            if(mod.All)
            {
                using(var client = new HttpClient())
                {
                    client.BaseAddress = new Uri(Utility.HOST);
                    var result = client.GetAsync("/stories").Result.Content.ReadAsStringAsync().Result;
                    stories = JsonConvert.DeserializeObject<Story[]>(result);
                    var li = new List<Story>(stories);
                    li.Sort(new Comparison<Story>((x, y) => x.rating.CompareTo(y.rating)));
                    li.Reverse();
                    itemsControl.ItemsSource = li;
                }
            }
            else
            {
                using (var client = new HttpClient())
                {
                    client.BaseAddress = new Uri(Utility.HOST);
                    var result = client.PostAsync("/stories", new StringContent(
                        DrugStringify(mod.Drug),
                        Encoding.UTF8,
                        "application/json"
                        )).Result.Content.ReadAsStringAsync().Result;
                    stories = JsonConvert.DeserializeObject<Story[]>(result);
                    var li = new List<Story>(stories);
                    li.Sort(new Comparison<Story>((x, y) => x.rating.CompareTo(y.rating)));
                    li.Reverse();
                    itemsControl.ItemsSource = li;
                }
            }
            base.OnNavigatedTo(e);
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            if(mod.All)
            {
                Frame.Navigate(typeof(DrugsPage), mod.Category);
            }
            else
            {
                Frame.Navigate(typeof(DrugPage), new SimpleDrugExtended(mod.Drug, "", mod.Category));
            }
        }

        private void itemsControl_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            var selected = itemsControl.SelectedItem as Story;
           
            Frame.Navigate(typeof(StoryPage), new Utility.StoryPageNavigate(selected._id, mod.Drug, mod.Category, mod.All));
           
            
        }
    }
}
