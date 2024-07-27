"use client";

import React, { useEffect, useState } from 'react';
import { Container, Grid, Paper, Typography, TextField, Button, MenuItem, InputAdornment, Box, List, ListItem, ListItemText, Divider, Select, FormControl, Chip, IconButton, MobileStepper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { fetchCampaigns } from './handler';

const Campaign: React.FC = () => {
    const [campaigns, setCampaigns] = useState([]);
    const [sortOrder, setSortOrder] = useState('');
    const [keyword, setKeyword] = useState('');
    const [showTag, setShowTag] = useState(false);
    const [tags, setTags] = useState<string[]>([]);
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = Math.ceil(campaigns.length / 3);

    useEffect(() => {
        const getCampaigns = async () => {
            const data = await fetchCampaigns();
            setCampaigns(data);
        };
        getCampaigns();
    }, []);

    const handleSortChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setSortOrder(event.target.value as string);
    };

    const handleKeywordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(event.target.value);
    };

    const handleKeywordKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && keyword.trim() !== '') {
            setTags([...tags, keyword]);
            setKeyword('');
            setShowTag(true);
        }
    };

    const handleTagDelete = (tagToDelete: string) => () => {
        setTags((tags) => tags.filter((tag) => tag !== tagToDelete));
        if (tags.length === 1) {
            setShowTag(false);
        }
    };

    const handleClearAll = () => {
        setTags([]);
        setShowTag(false);
    };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <Container maxWidth="xl" sx={{ mt: 4 }}>
            <Typography variant="h2" gutterBottom>Campaign</Typography>
            <Typography variant="subtitle1" gutterBottom>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
            <Grid container spacing={4} sx={{ mt: 4 }}>
                <Grid item xs={12} md={3}>
                    <Paper sx={{ p: 2 }}>
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                            <Typography variant="h6">Filters</Typography>
                            <Button variant="text" color="primary" onClick={handleClearAll}>Clear all</Button>
                        </Box>
                        <Typography variant="body2" sx={{ mt: 1, mb: 2 }}>Showing {campaigns.length} of {campaigns.length}</Typography>
                        <List>
                            <ListItem button>
                                <ListItemText primary="All" sx={{ fontSize: '0.875rem' }} />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Category One" sx={{ fontSize: '0.875rem' }} />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Category Two" sx={{ fontSize: '0.875rem' }} />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Category Three" sx={{ fontSize: '0.875rem' }} />
                            </ListItem>
                        </List>
                        <Divider sx={{ my: 2 }} />
                        <TextField
                            fullWidth
                            label="Keyword"
                            variant="outlined"
                            value={keyword}
                            onChange={handleKeywordChange}
                            onKeyPress={handleKeywordKeyPress}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={9}>
                    <Grid container spacing={2} justifyContent="space-between" sx={{ mb: 2 }}>
                        <Grid item>
                            {showTag && tags.map((tag, index) => (
                                <Chip
                                    key={index}
                                    label={tag}
                                    onDelete={handleTagDelete(tag)}
                                    deleteIcon={<CloseIcon />}
                                    color="primary"
                                    sx={{ m: 0.5 }}
                                />
                            ))}
                        </Grid>
                        <Grid item>
                            <FormControl variant="outlined" sx={{ minWidth: 120 }}>
                                <Select
                                    value={sortOrder}
                                    onChange={handleSortChange}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Sort by' }}
                                    sx={{ border: 'none', fontSize: '0.875rem' }}
                                >
                                    <MenuItem value="" disabled>Sort by</MenuItem>
                                    <MenuItem value="asc" sx={{ fontSize: '0.875rem' }}>Ascending</MenuItem>
                                    <MenuItem value="desc" sx={{ fontSize: '0.875rem' }}>Descending</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        {campaigns.slice(activeStep * 3, activeStep * 3 + 3).map((campaign) => (
                            <Grid item xs={12} sm={6} md={4} key={campaign.id}>
                                <Paper sx={{ p: 2, textAlign: 'left', minHeight: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    {campaign.attributes.banner?.data ? (
                                        <img src={campaign.attributes.banner.data.attributes.url} alt="Campaign" style={{ width: '100%', height: 'auto' }} />
                                    ) : (
                                        <div style={{ width: '100%', height: '150px', backgroundColor: '#f0f0f0' }}></div>
                                    )}
                                    <Box>
                                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 1 }}>{campaign.attributes.name}</Typography>
                                        <Typography variant="body2" sx={{ mb: 1, overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
                                            {campaign.attributes.description}
                                        </Typography>
                                        <Typography variant="body1" sx={{ mb: 1 }}>Rp {campaign.attributes.budget}</Typography>
                                    </Box>
                                    <Button variant="contained" color="primary" size="small" fullWidth>Lihat</Button>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                        <MobileStepper
                            steps={maxSteps}
                            position="static"
                            activeStep={activeStep}
                            sx={{ flexGrow: 1 }}
                            backButton={
                                <IconButton size="small" onClick={handleBack} disabled={activeStep === 0}>
                                    <KeyboardArrowLeft />
                                </IconButton>
                            }
                            nextButton={
                                <IconButton size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                                    <KeyboardArrowRight />
                                </IconButton>
                            }
                        />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Campaign;
