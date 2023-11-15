import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Typography, Paper, List, ListItem, ListItemText, IconButton, Slider } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import Chart from 'chart.js/auto';
import './Dashboard.css';

const DiscoverSection = () => {
  useEffect(() => {
    const ctx = document.getElementById('musicChart');
    const existingChart = Chart.getChart(ctx);

    if (existingChart) {
      existingChart.destroy();
    }

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Plays Trend',
            data: [500, 800, 1200, 1000, 1500, 2000],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false,
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: 'category',
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          },
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, []);

  return (
    <div className="section-container">
      <Typography variant="h6">Discover New Music</Typography>
      <List>
        <ListItem>
          <img src="https://images.pexels.com/photos/802195/pexels-photo-802195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={80} alt="Album Cover" />
          <ListItemText
            primary="Song Title 1"
            secondary="Artist 1"
          />
          <Typography variant="body2">Plays: 1000</Typography>
        </ListItem>
        <ListItem>
          <img src="https://images.pexels.com/photos/194926/pexels-photo-194926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={80} alt="Album Cover" />
          <ListItemText
            primary="Song Title 2"
            secondary="Artist 2"
          />
          <Typography variant="body2">Plays: 750</Typography>
        </ListItem>
      </List>
      <div className="chart-section">
        <Typography variant="h6">Music Chart</Typography>
        <canvas id="musicChart" width="400" height="200"></canvas>
      </div>
    </div>
  );
};

const FavoritesSection = () => (
  <div className="section-container">
    <Typography variant="h6">Your Favorite Songs</Typography>
    <List>
      <ListItem>
        <img src="https://i.pinimg.com/originals/1b/10/47/1b10472dcd5bcb0fa6fe248ffc97f1f9.jpg" width={80} alt="Album Cover" />
        <ListItemText
          primary="Favorite Song 1"
          secondary="Favorite Artist 1"
        />
        <Typography variant="body2">Likes: 500</Typography>
      </ListItem>
      <ListItem>
        <img src="https://images.genius.com/ce6eda3e60a8c9aecea0aee2c799dc93.1000x1000x1.jpg" width={80} alt="Album Cover" />
        <ListItemText
          primary="Favorite Song 2"
          secondary="Favorite Artist 2"
        />
        <Typography variant="body2">Likes: 300</Typography>
      </ListItem>
      <ListItem>
        <img src="https://t2.genius.com/unsafe/300x300/https://images.genius.com/e5098ac411b7d668f3e8bd1bcd25f5c5.1000x1000x1.jpg" width={80} alt="Album Cover" />
        <ListItemText
          primary="Favorite Song 3"
          secondary="Favorite Artist 3"
        />
        <Typography variant="body2">Likes: 300</Typography>
      </ListItem>
      <ListItem>
        <img src="https://t2.genius.com/unsafe/187x0/https%3A%2F%2Fimages.genius.com%2F2c8bbf43b516e6e3aba7fa6d244e003f.300x300x1.png" width={80} alt="Album Cover" />
        <ListItemText
          primary="Favorite Song 4"
          secondary="Favorite Artist 4"
        />
        <Typography variant="body2">Likes: 300</Typography>
      </ListItem>
      <ListItem>
        <img src="https://th.bing.com/th/id/R.e2a18556a2e6115f4ac26d4997446fb0?rik=dyazEfnAvsq2Hw&pid=ImgRaw&r=0" width={80} alt="Album Cover" />
        <ListItemText
          primary="Favorite Song 5"
          secondary="Favorite Artist 5"
        />
        <Typography variant="body2">Likes: 300</Typography>
      </ListItem>
    </List>
  </div>
);

const PlaylistSection = () => (
  <div className="section-container">
    <Typography variant="h6">Your Playlist</Typography>
    <List>
      <ListItem>
        <img src="https://images.genius.com/ce6eda3e60a8c9aecea0aee2c799dc93.1000x1000x1.jpg" width={80} alt="Album Cover" />
        <ListItemText
          primary="Playlist Song 1"
          secondary="Playlist Artist 1"
        />
        <Typography variant="body2">Added: 200</Typography>
      </ListItem>
      <ListItem>
        <img src="https://images-na.ssl-images-amazon.com/images/I/71mCA44t-XS._AC_SL1200_.jpg" width={80} alt="Album Cover" />
        <ListItemText
          primary="Playlist Song 2"
          secondary="Playlist Artist 2"
        />
        <Typography variant="body2">Added: 100</Typography>
      </ListItem>
    </List>
  </div>
);

const MusicPlayer = () => (
  <div className="music-player-container">
    <img src="https://th.bing.com/th/id/OIP.lD7KSLCrsH0c1GfInM0ckQHaHa?pid=ImgDet&rs=1" width={300} alt="Album Cover" />
    <Typography variant="h6" className="music-player-title">
      Now Playing: Song Title
    </Typography>
    <IconButton>
      <PlayArrowIcon />
    </IconButton>
    <IconButton>
      <PauseIcon />
    </IconButton>
    <Slider value={50} />
  </div>
);

const Dashboard = () => {
  const [selectedSection, setSelectedSection] = useState(0);

  const handleSectionChange = (event, newValue) => {
    setSelectedSection(newValue);
  };

  return (
    <div className="dashboard-container">
      <Paper elevation={3} className="tabs-container">
        <h4 className='name'>MusicBot</h4>
        <Tabs
          className="custom-tabs"
          value={selectedSection}
          onChange={handleSectionChange}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Discover" />
          <Tab label="Favorites" />
          <Tab label="Playlist" />
          <Tab label="Music Player" />
        </Tabs>
      </Paper>

      <div className="main-content">
        {selectedSection === 0 && <DiscoverSection />}
        {selectedSection === 1 && <FavoritesSection />}
        {selectedSection === 2 && <PlaylistSection />}
        {selectedSection === 3 && <MusicPlayer />}
      </div>
    </div>
  );
};

export default Dashboard;
