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
using System.Text;
using Newtonsoft.Json;

// The Blank Page item template is documented at http://go.microsoft.com/fwlink/?LinkId=234238

namespace DrugEd
{
    /// <summary>
    /// An empty page that can be used on its own or navigated to within a Frame.
    /// </summary>
    public sealed partial class DrugPage : Page
    {
        private Drug drug;
        public Drug DrugProperty { get { return drug; } }
        private SimpleDrugExtended simpleDrug;

        private string StringifyName(string name)
        {
            return "{ \"name\": \"" + name + "\"}";
        }

        public DrugPage()
        {
            this.DataContext = this;
            this.InitializeComponent();
        }

        protected override void OnNavigatedTo(NavigationEventArgs e)
        {
            simpleDrug = e.Parameter as SimpleDrugExtended;
            string name = simpleDrug.Name;

            using(var client = new HttpClient())
            {
                client.BaseAddress = new Uri(Models.Utility.HOST);
                string result = client.PostAsync("/drug", new StringContent(StringifyName(name), Encoding.UTF8, "application/json"))
                    .Result.Content.ReadAsStringAsync().Result;

                drug = JsonConvert.DeserializeObject<Drug>(result);
                
            }
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            Frame.Navigate(typeof(DrugsPage), simpleDrug.Category);
        }

        private void Button_Click_1(object sender, RoutedEventArgs e)
        {
            Frame.Navigate(typeof(StoriesPage), new Utility.StoryNavigate(drug.name, drug.category, false));
        }
    }
}
