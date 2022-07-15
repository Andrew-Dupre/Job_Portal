import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import "./TabSectionStyles.css";
import { Add, Download, Upload } from "@mui/icons-material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TabSection = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div
      style={{
        width: "90%",
        margin: "auto",
        marginTop: "2rem",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Interview Sheet" {...a11yProps(0)} />
            <Tab label="Reporting Line" {...a11yProps(1)} />
            <Tab label="Position" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Paper
            elevation={1}
            sx={{ width: "100%", height: "80vh", borderRadius: "10px" }}
          >
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                startIcon={<Add />}
                variant="contained"
                sx={{
                  backgroundColor: "#28475C",
                  "&:hover": {
                    backgroundColor: "#2e526a",
                  },
                }}
                size="small"
              >
                Add
              </Button>
            </div>
          </Paper>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Paper
            elevation={1}
            sx={{ width: "100%", height: "80vh", borderRadius: "10px" }}
          >
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "330px",
                }}
              >
                <Button
                  startIcon={<Add />}
                  variant="contained"
                  sx={{
                    backgroundColor: "#28475C",
                    "&:hover": {
                      backgroundColor: "#2e526a",
                    },
                  }}
                  size="small"
                >
                  Add
                </Button>
                <Button
                  startIcon={<Upload />}
                  variant="contained"
                  sx={{
                    backgroundColor: "#0F62FE",
                    "&:hover": {
                      backgroundColor: "#2d76fe",
                    },
                  }}
                  size="small"
                >
                  Upload
                </Button>
                <Button
                  startIcon={<Download />}
                  variant="contained"
                  sx={{
                    backgroundColor: "#A0BCC2",
                    "&:hover": {
                      backgroundColor: "#adc5cb",
                    },
                  }}
                  size="small"
                >
                  Download
                </Button>
              </div>
            </div>
          </Paper>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Paper
            elevation={1}
            sx={{ width: "100%", height: "80vh", borderRadius: "10px" }}
          >
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                startIcon={<Add />}
                variant="contained"
                sx={{
                  backgroundColor: "#28475C",
                  "&:hover": {
                    backgroundColor: "#2e526a",
                  },
                }}
                size="small"
              >
                Add
              </Button>
            </div>
          </Paper>
        </TabPanel>
      </Box>
    </div>
  );
};

export default TabSection;
