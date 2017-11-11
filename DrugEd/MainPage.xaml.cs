using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
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

// The Blank Page item template is documented at http://go.microsoft.com/fwlink/?LinkId=402352&clcid=0x409

namespace DrugEd
{
    /// <summary>
    /// An empty page that can be used on its own or navigated to within a Frame.
    /// </summary>
    public sealed partial class MainPage : Page
    {
        private bool Connection = true;
        private Motto moto;
        public MainPage()
        {
            this.InitializeComponent();

            using(var client = new HttpClient())
            {
                try
                {
                    client.BaseAddress = new Uri(Utility.HOST);
                    var result = client.GetAsync("/motto").Result.Content.ReadAsStringAsync().Result;
                    moto = JsonConvert.DeserializeObject<Motto>(result);
                    mottoTextBlock.Text = moto.motto;
                }
                catch (Exception e)
                {
                    mottoTextBlock.Text = "No Connection. Try again later.";
                    Connection = false;
                }
                
            }

        }

        #region First page events
        private void ListBox_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            if(Connection)
            {
                Category selected = mainListBox.SelectedItem as Category;
                Frame.Navigate(typeof(DrugsPage), selected.Name);
            }     
        }
        #endregion
    }

    public class Category
    {
        public string Text { get; set; }
        public string Name { get; set; }
        public Category(string name, string text)
        {
            this.Name = name;
            this.Text = text;
        }
    }

    public class Categories: ObservableCollection<Category>
    {
        public Categories()
        {
            Add(new Category("stimulant", "Stimulants"));
            Add(new Category("hallucinogen", "Hallucinogens"));
            Add(new Category("hypnotic", "Hypnotics"));
            Add(new Category("opioid", "Opioid"));
        }
    }

}
