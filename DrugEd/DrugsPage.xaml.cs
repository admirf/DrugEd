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
using System.Collections.ObjectModel;

// The Blank Page item template is documented at http://go.microsoft.com/fwlink/?LinkId=234238

namespace DrugEd
{
    /// <summary>
    /// An empty page that can be used on its own or navigated to within a Frame.
    /// </summary>
    
    public sealed partial class DrugsPage : Page
    {

        private string StringifyCategory(string category)
        {
            return "{ \"category\": \"" + category + "\"}";
        }

        private string category;
        public DrugsPage()
        {
            this.InitializeComponent();
        }


        #region Events
        protected override void OnNavigatedTo(NavigationEventArgs e) 
        {
            category = e.Parameter as string;
            
            using(var http = new HttpClient())
            {
                http.BaseAddress = new Uri("http://localhost:1488");
                var result = http.PostAsync("/drugs", new StringContent(StringifyCategory(category), Encoding.UTF8, "application/json")).Result;
                var post = result.Content.ReadAsStringAsync().Result;
                var obj = JsonConvert.DeserializeObject<Models.DrugListModel>(post);
                

                var li = new List<SimpleDrug>();
                foreach(var x in obj.drugs)
                {
                    li.Add(new SimpleDrug(x[0], x[1]));
                }
                itemsControl.ItemsSource = li;
            }

        }

        
        private void itemsControl_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            var selected = itemsControl.SelectedItem as SimpleDrug;
            Frame.Navigate(typeof(DrugPage), new SimpleDrugExtended(selected.Name, selected.AlterName, category));
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            Frame.Navigate(typeof(MainPage));
        }
        

        private void Button_Click_1(object sender, RoutedEventArgs e)
        {
            Frame.Navigate(typeof(StoriesPage), new Utility.StoryNavigate("", category, true));
        }
        #endregion
    }

    public class SimpleDrug
    {
        public string Name { get; set; }
        public string AlterName { get; set; }
        public SimpleDrug(string name, string altername)
        {
            this.Name = name;
            this.AlterName = altername;
        }
    }

    public class SimpleDrugExtended: SimpleDrug
    {
        public string Category { get; set; }
        public SimpleDrugExtended(string name, string altername, string category): base(name, altername)
        {
            this.Category = category;
        }
    }

}
