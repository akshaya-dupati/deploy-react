import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import FilterNoneOutlinedIcon from '@material-ui/icons/FilterNoneOutlined';
import SyncAltOutlinedIcon from '@material-ui/icons/SyncAltOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import PagesOutlinedIcon from '@material-ui/icons/PagesOutlined';
import FolderOutlinedIcon from '@material-ui/icons/FolderOutlined';
import AdjustOutlinedIcon from '@material-ui/icons/AdjustOutlined';
import HeadsetMicOutlinedIcon from '@material-ui/icons/HeadsetMicOutlined';
import ReportOutlinedIcon from '@material-ui/icons/ReportOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <FolderOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Documents" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AdjustOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="History" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SyncAltOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Transfer" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <FilterNoneOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Services" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PagesOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Projects" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SettingsOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <HeadsetMicOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Support" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ReportOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Report" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PersonOutlineOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Users" />
    </ListItem>
    </div>
);